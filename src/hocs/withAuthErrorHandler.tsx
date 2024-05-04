import { Component } from "react";
import axios from "../lib/axios";
import Swal from 'sweetalert2/src/sweetalert2.js';
import withReactContent from 'sweetalert2-react-content'

const withAuthErrorHandler = (WrappedComponent: any) => {
	return class extends Component {
		MySwal = withReactContent(Swal)
		state = {
			error: null
		};
		reqInterceptor: number = 0
		resInterceptor: number = 0
		componentWillMount() {
			this.reqInterceptor = axios.interceptors.request.use(req => {
				return req;
			});
			this.resInterceptor = axios.interceptors.response.use(
				res => res,
				error => {
					if (error.response) {
						if (error.response.status === 401 || error.response.status === 403) {
							this.MySwal.fire({
								title: "แจ้งเตือน",
								titleText: "Session หมดอายุ",
								confirmButtonText: "ตกลง",
								customClass: {
									confirmButton: ["warning"],
								},
								showConfirmButton: true,
								icon: "warning"
							}).then(() => {
								window.location.href = "/auth/login"
							})
						}
					}

					return Promise.reject(error);
				}
			);
		}

		componentWillUnmount() {
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		}

		render() {
			return (
				<>
					<WrappedComponent {...this.props} />{' '}
				</>
			);
		}
	};
};

export default withAuthErrorHandler;