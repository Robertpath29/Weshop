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
import { useCreateSessionMutation } from "../../redux/store/session/session.api";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useAction } from "../../hooks/useAction";

const LoginForm = () => {
    const routeRegister = useNavigate();
    const { getCurrent_user } = useAction();
    const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
    const [error, setError] = useState<{ status: string; message: string }>();

    const [mutate, { isLoading }] = useCreateSessionMutation();
    const newSession = async () => {
        try {
            const result = await mutate(dataLogin);
            if ("data" in result) {
                if (result.data.status === "success") {
                    getCurrent_user(result.data.current_user);
                } else {
                    setError({
                        status: result.data.status,
                        message: result.data.message,
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

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
                            newSession();
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
