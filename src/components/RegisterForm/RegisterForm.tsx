import React, { useState } from "react";
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
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import FlashMessage from "../FlashMessage/FlashMessage";
import { useUser } from "../../hooks/useUser";

const RegisterForm = () => {
    const routeLogin = useNavigate();
    const [dataFormRegister, setDataFormRegister] = useState({
        user: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });
    const { crateUser, response, loading, setResponse } = useUser();
    return (
        <RegisterFormStyle>
            {response?.status === "success" && (
                <FlashMessage message="You have registered!" route="/login" />
            )}
            <ContainerFormStyle>
                <ContainerOldCustomer>
                    <h1>Old customer?</h1>
                    <span onClick={() => routeLogin("/login")}>
                        Login first.
                    </span>
                </ContainerOldCustomer>
                <hr />
                {response?.status === "error" && (
                    <ErrorMessage message={response?.message} />
                )}
                <ContainerInputStyle>
                    <label htmlFor="name">Name</label>
                    <WSInput
                        type="text"
                        id="name"
                        placeholder="Alex"
                        autocomplete="username"
                        value={dataFormRegister.user.name}
                        warning={response?.warning?.name}
                        onChange={(e) => {
                            setResponse({ status: "", message: "" });
                            setDataFormRegister({
                                ...dataFormRegister,
                                user: {
                                    ...dataFormRegister.user,
                                    name: e.target.value,
                                },
                            });
                        }}
                    />
                </ContainerInputStyle>
                <ContainerInputStyle>
                    <label htmlFor="email">Email</label>
                    <WSInput
                        type="email"
                        id="email"
                        placeholder="gmail@gmail.com"
                        autocomplete="username"
                        value={dataFormRegister.user.email}
                        warning={response?.warning?.email}
                        onChange={(e) => {
                            setResponse({ status: "", message: "" });
                            setDataFormRegister({
                                ...dataFormRegister,
                                user: {
                                    ...dataFormRegister.user,
                                    email: e.target.value,
                                },
                            });
                        }}
                    />
                </ContainerInputStyle>
                <ContainerInputStyle>
                    <label htmlFor="password">Password</label>
                    <WSInput
                        type="password"
                        id="password"
                        placeholder="qwerty12345"
                        autocomplete="current-password"
                        value={dataFormRegister.user.password}
                        warning={response?.warning?.password}
                        onChange={(e) => {
                            setResponse({ status: "", message: "" });
                            setDataFormRegister({
                                ...dataFormRegister,
                                user: {
                                    ...dataFormRegister.user,
                                    password: e.target.value,
                                },
                            });
                        }}
                    />
                </ContainerInputStyle>
                <ContainerInputStyle>
                    <label htmlFor="password-confirm">Password confirm</label>
                    <WSInput
                        type="password"
                        id="password-confirm"
                        placeholder="qwerty12345"
                        autocomplete="current-password"
                        value={dataFormRegister.user.password_confirmation}
                        warning={response?.warning?.password_confirmation}
                        onChange={(e) => {
                            setResponse({ status: "", message: "" });
                            setDataFormRegister({
                                ...dataFormRegister,
                                user: {
                                    ...dataFormRegister.user,
                                    password_confirmation: e.target.value,
                                },
                            });
                        }}
                    />
                </ContainerInputStyle>
                {loading ? (
                    <Loading />
                ) : (
                    <ContainerBtnStyle>
                        <WSButton
                            onClick={(e) => {
                                e.preventDefault();
                                crateUser(
                                    setDataFormRegister,
                                    dataFormRegister
                                );
                            }}
                            upper
                            maxWidth={"300px"}
                        >
                            register
                        </WSButton>
                    </ContainerBtnStyle>
                )}
            </ContainerFormStyle>
        </RegisterFormStyle>
    );
};

export default RegisterForm;
