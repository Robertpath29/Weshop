import React, { FC, useEffect, useState } from "react";
import {
    ContainerBtn,
    ContainerInput,
    ContainerTitle,
    LoginFormStyle,
} from "./loginForm.style";
import WSInput from "../UI/WSInput/WSInput";
import WSButton from "../UI/WSButton/WSButton";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useSession } from "../../hooks/useSession";
import FormEmailFromResPas from "../FormEmailFromResPas/FormEmailFromResPas";
import { loginFormType } from "./loginForm.types";

const LoginForm: FC<loginFormType> = ({ setVisFormChangePas }) => {
    const routeRegister = useNavigate();
    const routeHome = useNavigate();
    const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
    const [error, setError] = useState<{ status: string; message: string }>();
    const [countIncorrectPassword, setCountIncorrectPassword] = useState(1);
    const { createSession, isLoading } = useSession(
        setError,
        undefined,
        routeHome,
        countIncorrectPassword,
        setCountIncorrectPassword
    );
    useEffect(() => {
        setCountIncorrectPassword(1);
    }, []);

    return (
        <LoginFormStyle>
            <ContainerTitle>
                <h1>New customer?</h1>
                <span onClick={() => routeRegister("/login/register")}>
                    registration now!
                </span>
            </ContainerTitle>
            <ContainerInput>
                <label htmlFor="email">Email</label>
                <WSInput
                    type="email"
                    placeholder="gmail@gmail.com"
                    id="email"
                    autocomplete="username"
                    onChange={(e) => {
                        setError({
                            status: "",
                            message: "",
                        });
                        setDataLogin({
                            ...dataLogin,
                            email: e.target.value,
                        });
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="password">Password</label>
                <WSInput
                    type="password"
                    placeholder="qwerty12345"
                    id="password"
                    autocomplete="current-password"
                    onChange={(e) => {
                        setError({
                            status: "",
                            message: "",
                        });
                        setDataLogin({
                            ...dataLogin,
                            password: e.target.value,
                        });
                    }}
                />
            </ContainerInput>
            {error?.status === "error" && (
                <ErrorMessage message={error.message} />
            )}
            {countIncorrectPassword > 3 && (
                <ContainerTitle>
                    <h1 style={{ color: "yellow" }}>Forgot your password?</h1>
                    <span
                        style={{ color: "yellow" }}
                        onClick={() => setVisFormChangePas(true)}
                    >
                        reset now!
                    </span>
                </ContainerTitle>
            )}
            {isLoading ? (
                <Loading />
            ) : (
                <ContainerBtn>
                    <WSButton
                        onClick={(e) => {
                            e.preventDefault();
                            createSession(dataLogin);
                        }}
                        upper
                        maxWidth={"300px"}
                    >
                        Login
                    </WSButton>
                </ContainerBtn>
            )}
        </LoginFormStyle>
    );
};

export default LoginForm;
