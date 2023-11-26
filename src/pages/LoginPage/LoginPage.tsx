import React from "react";
import { ContainerLoginStyle, LoginPageStyle } from "./loginPage.style";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <LoginPageStyle>
            <Header />
            <ContainerLoginStyle>
                <LoginForm />
            </ContainerLoginStyle>
        </LoginPageStyle>
    );
};

export default LoginPage;
