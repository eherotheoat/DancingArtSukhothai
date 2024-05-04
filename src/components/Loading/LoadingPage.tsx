import { Spinner } from "react-bootstrap";
import "./LoadingPage.css";
import { LoadingPageProps } from "./types";

export default function LoadingPage(props: LoadingPageProps) {
    return (
        props.loading ?
            <div className="page-loading">
                <div className="tw-text-center loading">
                    <Spinner animation="border" variant="primary" style={{
                        width: '5rem',
                        height: '5rem',
                    }} />
                    <h3 className="mt-3 text-white">{props.text}</h3>
                </div>
            </div> : <></>
    )
}