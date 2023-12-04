import React, { useEffect, useState } from "react";
import {
    ContainerPasswordResetStyle,
    PasswordResetPageStyle,
} from "./PasswordResetPage.style";
import { useLocation, useNavigate } from "react-router-dom";
import NotFound404Page from "../NotFound404Page/NotFound404Page";
import { PASSWORD_RESET_URL, axiosGet } from "../../api/axiosQuery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {
    ContainerBtn,
    ContainerTitle,
} from "../../components/LoginForm/loginForm.style";
import WSButton from "../../components/UI/WSButton/WSButton";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";

const PasswordResetPage = () => {
    const routeHome = useNavigate();
    const [response, setResponse] = useState({ status: "", message: "" });
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const email = params.get("user[email]");
    const password_reset_token = params.get("user[password_reset_token]");
    const checkPasswordResetToken = async () => {
        const response = await axiosGet(PASSWORD_RESET_URL + `/edit`, {
            email,
            password_reset_token,
        });

        setResponse(response.data);
    };

    useEffect(() => {
        if (email && password_reset_token) {
            checkPasswordResetToken();
        }
    }, []);

    return (
        <>
            {email && password_reset_token ? (
                response.status !== "error" ? (
                    <PasswordResetPageStyle>
                        <ContainerPasswordResetStyle>
                            <ContainerTitle>
                                <h1>Reset your password:</h1>
                            </ContainerTitle>
                            <ResetPasswordForm
                                email={email}
                                password_reset_token={password_reset_token}
                            />
                        </ContainerPasswordResetStyle>
                    </PasswordResetPageStyle>
                ) : (
                    <>
                        <ErrorMessage message={response.message} />
                        <ContainerBtn>
                            <WSButton
                                onClick={() => {
                                    routeHome("/");
                                }}
                                upper
                                maxWidth={"300px"}
                            >
                                back home
                            </WSButton>
                        </ContainerBtn>
                    </>
                )
            ) : (
                <NotFound404Page />
            )}
        </>
    );
};

export default PasswordResetPage;
