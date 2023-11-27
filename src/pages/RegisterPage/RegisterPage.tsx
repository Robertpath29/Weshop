import React from "react";
import {
    ContainerRegisterPageStyle,
    RegisterPageStyle,
} from "./registerPage.style";
import Header from "../../components/Header/Header";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
    return (
        <RegisterPageStyle>
            <Header />
            <ContainerRegisterPageStyle>
                <h1>Register</h1>
                <hr />
                <RegisterForm />
            </ContainerRegisterPageStyle>
        </RegisterPageStyle>
    );
};

export default RegisterPage;
