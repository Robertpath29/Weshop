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
import { REGISTER_NEW_USER, axiosPost } from "../../api/axiosQuery";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import FlashMessage from "../FlashMessage/FlashMessage";

const RegisterForm = () => {
    const routeLogin = useNavigate();
    const [data, setData] = useState<{
        status: string;
        message: string;
        warning?: {
            name?: string;
            email?: string;
            password?: string;
            password_confirmation?: string;
        };
    }>();
    const [dataFormRegister, setDataFormRegister] = useState({
        user: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    const [loading, isLoading] = useState(false);

    const postNewUser = async () => {
        isLoading(true);
        const status = await axiosPost(
            REGISTER_NEW_USER,
            dataFormRegister,
            isLoading
        );
        setData(status.data);
        if (status.data.status === "success")
            setDataFormRegister({
                user: {
                    name: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                },
            });
    };

    return (
        <RegisterFormStyle>
            {data?.status === "success" && (
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
                {data?.status === "error" && (
                    <ErrorMessage message={data?.message} />
                )}
                <ContainerInputStyle>
                    <label htmlFor="name">Name</label>
                    <WSInput
                        type="text"
                        id="name"
                        placeholder="Alex"
                        autocomplete="username"
                        value={dataFormRegister.user.name}
                        warning={data?.warning?.name}
                        onChange={(e) => {
                            setData({ status: "", message: "" });
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
                        warning={data?.warning?.email}
                        onChange={(e) => {
                            setData({ status: "", message: "" });
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
                        warning={data?.warning?.password}
                        onChange={(e) => {
                            setData({ status: "", message: "" });
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
                        warning={data?.warning?.password_confirmation}
                        onChange={(e) => {
                            setData({ status: "", message: "" });
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
                                postNewUser();
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
