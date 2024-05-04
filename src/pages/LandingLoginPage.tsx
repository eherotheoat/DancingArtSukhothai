import { ChangeEvent, Fragment, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import MainLogo from '../file/logo/LogoSchool.jpg';
import { schoolName as SchoolName } from "../constants/login";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import {
    login, setRememberMe
} from "../store/login";
import LoadingPage from "../components/Loading/LoadingPage";
import { useNavigate } from "react-router-dom";

export default function LandingLoginPage() {
    const [schoolName, setSchoolName] = useState<string>('schoolName');
    const dispatch = useAppDispatch();
    const loginStore = useAppSelector((state) => state.login);
    const navigate = useNavigate();
    const [showPassword, setshowPassword] = useState<boolean>(false);
    const language = 'th';
    const [teacherId, setTeacherId] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        if (language.toLowerCase() == 'th') {
            setSchoolName(SchoolName.th);
        } else {
            setSchoolName(SchoolName.en);
        }
        checkSignOut()
    }, []);

    useEffect(() => {
        if (loginStore.statusLogin == "01") {
            navigate("/");
        } else if (loginStore.statusLogin == "03") {
            // navigate("/changePassword")
        }
    }, [loginStore.statusLogin])

    const handleShowPassword = () => {
        setshowPassword(showPassword ? false : true)
    };

    const handleLogin = () => {
        if (teacherId.length >= 5 && password.length >= 5) {
            dispatch(
                login({
                    member_id: teacherId,
                    password: password,
                    language: language,
                    ip: "123.test"
                })
            )
        }
    };

    function checkSignOut() {
        if (window.location.pathname.indexOf('signOut')) {
            localStorage.removeItem('memberId')
            localStorage.removeItem('userExpire')
            localStorage.removeItem('token')
        }
    }

    function handleChangeTeacherId(event: ChangeEvent<HTMLInputElement>) {
        setTeacherId(event.target.value)
    }

    function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    function handleChangeRememberMe(rememberMe: boolean) {
        dispatch(
            setRememberMe(rememberMe)
        )
        localStorage.setItem('rememberMe',rememberMe.toString())
    }

    return (
        <>
            <LoadingPage loading={loginStore.loading} />
            <Fragment>
                <div className="tw-bg-slate-50">
                    <div className="tw-grid tw-h-screen tw-place-items-center ">
                        <div className="tw-flex tw-min-h-full tw-items-center tw-justify-center tw-py-12 tw-px-4 tw-sm:px-6 tw-lg:px-8">
                            <div className="tw-w-max tw-max-w-md tw-space-y-8">
                                <div className="tw-w-max tw-p-10 tw-bg-white tw-border 
                                tw-border-gray-200 tw-rounded-lg tw-shadow-md 
                                tw-sm:p-6 tw-md:p-8 tw-dark:bg-gray-800 tw-dark:border-gray-700">
                                    <div>
                                        <img
                                            className="tw-mx-auto tw-h-40 tw-w-40"
                                            src={`${MainLogo}`}
                                            alt={schoolName}
                                        />
                                        <h2 className="tw-mt-6 tw-text-center tw-text-3xl tw-font-bold tw-tracking-tight tw-text-gray-900">
                                            {schoolName}
                                        </h2>
                                    </div>
                                    <br />
                                    <form className="tw-space-y-6" >
                                        <h5 className="tw-text-xl tw-font-medium tw-text-gray-900 tw-dark:text-white tw-text-center">
                                        </h5>
                                        <div className="tw-eye_div">
                                            <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 tw-dark:text-white ">
                                                Teacher ID
                                            </label>
                                            <input
                                                onChange={(teacherId) => handleChangeTeacherId(teacherId)}
                                                type="text" name="text" id="text"
                                                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5 tw-dark:bg-gray-600 tw-dark:border-gray-500 tw-dark:placeholder-gray-400 tw-dark:text-white"
                                                placeholder="กรอก ID คุณครูผู้สอน" required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 tw-dark:text-white ">
                                                Password
                                            </label>
                                            <div className="tw-relative tw-w-full">
                                                <div className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-px-2">
                                                    {showPassword ?
                                                        <FaEye
                                                            type="button"
                                                            className="tw-text-gray-400 group-hover:tw-text-gray-500 tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6"
                                                            onClick={handleShowPassword}
                                                        /> :
                                                        <FaEyeSlash
                                                            type="button"
                                                            className="tw-text-gray-400 group-hover:tw-text-gray-500 tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6"
                                                            onClick={handleShowPassword}
                                                        />
                                                    }
                                                </div>
                                                <input
                                                    type={`${showPassword ? 'text' : 'password'}`} name="password" id="password"
                                                    placeholder="กรอกรหัสผ่าน"
                                                    onChange={(password) => handleChangePassword(password)}
                                                    className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5 tw-dark:bg-gray-600 tw-dark:border-gray-500 tw-dark:placeholder-gray-400 tw-dark:text-white" required />
                                            </div>
                                            {loginStore.statusLogin != "00" && loginStore.statusLogin != "01" ?
                                                <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-red-600 tw-dark:text-white ">
                                                    {loginStore.messageShow}
                                                </label> :
                                                <></>
                                            }
                                        </div>
                                        <div className="tw-flex twitems-start">
                                            <div className="tw-flex tw-items-start">
                                                <div className="tw-flex tw-items-center tw-h-5">
                                                    <input
                                                        id="remember"
                                                        type="checkbox"
                                                        value=""
                                                        checked={loginStore.rememberMe}
                                                        onChange={() => handleChangeRememberMe(loginStore.rememberMe ? false : true)}
                                                        className="tw-w-4 tw-h-4 tw-border tw-border-gray-300 tw-rounded tw-bg-gray-50 tw-focus:ring-3 tw-focus:ring-blue-300 tw-dark:bg-gray-700 tw-dark:border-gray-600 tw-dark:focus:ring-blue-600 tw-dark:ring-offset-gray-800" />
                                                </div>
                                                <label htmlFor="remember" className="tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-900 tw-dark:text-gray-300 ">
                                                    Remember me
                                                </label>
                                            </div>
                                            <label className="tw-ml-auto tw-text-sm tw-text-sky-700 ">Lost Password?</label>
                                        </div>
                                    </form>
                                    <br />
                                    <button
                                        className="tw-w-full tw-text-white tw-bg-sky-700 tw-hover:bg-sky-800 tw-focus:ring-4 tw-focus:outline-none 
                                            tw-focus:ring-sky-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-dark:bg-sky-600 
                                            tw-dark:hover:bg-sky-700 tw-dark:focus:ring-sky-800 "
                                        onClick={handleLogin}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        </>
    )
}