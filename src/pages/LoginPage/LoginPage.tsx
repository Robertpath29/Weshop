import React, { useState } from "react";
import { ContainerLoginStyle, LoginPageStyle } from "./loginPage.style";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import FormEmailFromResPas from "../../components/FormEmailFromResPas/FormEmailFromResPas";

const LoginPage = () => {
    const [visFormChangePas, setVisFormChangePas] = useState(false);
    return (
        <LoginPageStyle>
            <Header />
            <ContainerLoginStyle>
                {visFormChangePas ? (
                    <FormEmailFromResPas
                        setVisFormChangePas={setVisFormChangePas}
                    />
                ) : (
                    <LoginForm setVisFormChangePas={setVisFormChangePas} />
                )}
            </ContainerLoginStyle>
        </LoginPageStyle>
    );
};

export default LoginPage;
