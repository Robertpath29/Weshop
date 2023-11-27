import React from "react";
import {
    ContainerBtn,
    ContainerInput,
    ContainerNewCustomer,
    LoginFormStyle,
} from "./loginForm.style";
import WSInput from "../UI/WSInput/WSInput";
import WSButton from "../UI/WSButton/WSButton";

const LoginForm = () => {
    return (
        <LoginFormStyle>
            <ContainerNewCustomer>
                <h1>New customer?</h1>
                <span>registration now!</span>
            </ContainerNewCustomer>
            <ContainerInput>
                <label htmlFor="email">Email</label>
                <WSInput
                    type="email"
                    placeholder="gmail@gmail.com"
                    id="email"
                    autocomplete="username"
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="password">Password</label>
                <WSInput
                    type="password"
                    placeholder="qwerty12345"
                    id="password"
                    autocomplete="current-password"
                />
            </ContainerInput>
            <ContainerBtn>
                <WSButton
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                    upper
                    maxWidth={300}
                >
                    Login
                </WSButton>
            </ContainerBtn>
        </LoginFormStyle>
    );
};

export default LoginForm;
