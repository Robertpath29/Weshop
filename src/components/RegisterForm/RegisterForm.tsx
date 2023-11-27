import React from "react";
import {
    ContainerBtnStyle,
    ContainerFormStyle,
    ContainerInputStyle,
    ContainerOldCustomer,
    RegisterFormStyle,
} from "./registerForm.style";
import WSInput from "../UI/WSInput/WSInput";
import WSButton from "../UI/WSButton/WSButton";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const routeLogin = useNavigate();
    return (
        <RegisterFormStyle>
            <ContainerFormStyle>
                <ContainerOldCustomer>
                    <h1>Old customer?</h1>
                    <span onClick={() => routeLogin("/login")}>
                        Login first.
                    </span>
                </ContainerOldCustomer>
                <hr />
                <ContainerInputStyle>
                    <label htmlFor="name">Name</label>
                    <WSInput
                        type="text"
                        id="name"
                        placeholder="Alex"
                        autocomplete="username"
                    />
                </ContainerInputStyle>
                <ContainerInputStyle>
                    <label htmlFor="email">Email</label>
                    <WSInput
                        type="email"
                        id="email"
                        placeholder="gmail@gmail.com"
                        autocomplete="username"
                    />
                </ContainerInputStyle>
                <ContainerInputStyle>
                    <label htmlFor="password">Password</label>
                    <WSInput
                        type="password"
                        id="password"
                        placeholder="qwerty12345"
                        autocomplete="current-password"
                    />
                </ContainerInputStyle>
                <ContainerInputStyle>
                    <label htmlFor="password-confirm">Password confirm</label>
                    <WSInput
                        type="password"
                        id="password-confirm"
                        placeholder="qwerty12345"
                        autocomplete="current-password"
                    />
                </ContainerInputStyle>
                <ContainerBtnStyle>
                    <WSButton
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                        upper
                        maxWidth={300}
                    >
                        register
                    </WSButton>
                </ContainerBtnStyle>
            </ContainerFormStyle>
        </RegisterFormStyle>
    );
};

export default RegisterForm;
