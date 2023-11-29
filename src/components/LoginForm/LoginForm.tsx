import React, { useState } from "react";
import {
    ContainerBtn,
    ContainerInput,
    ContainerNewCustomer,
    LoginFormStyle,
} from "./loginForm.style";
import WSInput from "../UI/WSInput/WSInput";
import WSButton from "../UI/WSButton/WSButton";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useSession } from "../../hooks/useSession";

const LoginForm = () => {
    const routeRegister = useNavigate();
    const routeHome = useNavigate();
    const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
    const [error, setError] = useState<{ status: string; message: string }>();
    const { createSession, isLoading } = useSession(
        setError,
        undefined,
        routeHome
    );
    return (
        <LoginFormStyle>
            <ContainerNewCustomer>
                <h1>New customer?</h1>
                <span onClick={() => routeRegister("/login/register")}>
                    registration now!
                </span>
            </ContainerNewCustomer>
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
                        setDataLogin({ ...dataLogin, email: e.target.value });
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
