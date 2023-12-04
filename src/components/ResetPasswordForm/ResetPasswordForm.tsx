import React, { FC, useState } from "react";
import { ResetPasswordFormStyle } from "./resetPasswordForm.style";
import { ContainerInputStyle } from "../UI/WSInput/wsInput.style";
import WSInput from "../UI/WSInput/WSInput";
import { responseType } from "../../types/response.types";
import Loading from "../Loading/Loading";
import { ContainerBtn } from "../LoginForm/loginForm.style";
import WSButton from "../UI/WSButton/WSButton";
import { PASSWORD_RESET_URL, axiosPut } from "../../api/axiosQuery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { ResetPasswordFormTypes } from "./resetPasswordForm.types";
import { useNavigate } from "react-router-dom";

const ResetPasswordForm: FC<ResetPasswordFormTypes> = ({
    email,
    password_reset_token,
}) => {
    const [dataFormPassword, setDataFormPassword] = useState({
        password: "",
        password_confirmation: "",
    });
    const [response, setResponse] = useState<responseType>();
    const [loading, isLoading] = useState(false);
    const routeLogin = useNavigate();

    const changePassword = async () => {
        isLoading(true);
        if (dataFormPassword.password === "") {
            setResponse({
                status: "error",
                message: "password cannot be blank",
            });
            isLoading(false);
            return;
        }
        const response = await axiosPut(
            PASSWORD_RESET_URL,
            {
                user: dataFormPassword,
                email,
                password_reset_token,
            },
            isLoading
        );
        setResponse(response.data);
        if (response.data.status === "success") {
            routeLogin("/login");
        }
    };
    return (
        <ResetPasswordFormStyle>
            {response?.status === "error" && (
                <ErrorMessage message={response.message} />
            )}
            <ContainerInputStyle>
                <label htmlFor="NewPassword">New password</label>
                <WSInput
                    type="password"
                    id="NewPassword"
                    placeholder="qwerty12345"
                    autocomplete="current-password"
                    warning={response?.warning?.password}
                    onChange={(e) => {
                        setDataFormPassword({
                            ...dataFormPassword,
                            password: e.target.value,
                        });
                    }}
                />
            </ContainerInputStyle>
            <ContainerInputStyle>
                <label htmlFor="confirmPassword">Password confirm</label>
                <WSInput
                    type="password"
                    id="confirmPassword"
                    placeholder="qwerty12345"
                    autocomplete="current-password"
                    warning={response?.warning?.password_confirmation}
                    onChange={(e) => {
                        setDataFormPassword({
                            ...dataFormPassword,
                            password_confirmation: e.target.value,
                        });
                    }}
                />
            </ContainerInputStyle>
            {loading ? (
                <Loading />
            ) : (
                <ContainerBtn>
                    <WSButton
                        onClick={(e) => {
                            e.preventDefault();
                            changePassword();
                        }}
                        upper
                        maxWidth={"300px"}
                    >
                        reset password
                    </WSButton>
                </ContainerBtn>
            )}
        </ResetPasswordFormStyle>
    );
};

export default ResetPasswordForm;
