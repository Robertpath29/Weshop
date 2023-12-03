import React, { useEffect, useState } from "react";
import { PasswordUserFormStyle } from "./passwordUserForm.style";
import { ContainerFormUpdateStyle } from "../updateUserForm.style";
import { ContainerInputStyle } from "../../UI/WSInput/wsInput.style";
import WSInput from "../../UI/WSInput/WSInput";
import { ContainerBtnStyle } from "../../FlashMessage/flashMessage.style";
import WSButton from "../../UI/WSButton/WSButton";
import { useSelector } from "react-redux";
import { reducersType } from "../../../redux/combineReducer/combineReducer";
import { useUser } from "../../../hooks/useUser";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import Loading from "../../Loading/Loading";

const PasswordUserForm = () => {
    const [disabled, isDisabled] = useState(true);
    const current_user = useSelector((state: reducersType) => state.user);
    const { changeUser, response, loading } = useUser();
    const [dataFormPassword, setDataFormPassword] = useState({
        old_password: "",
        password: "",
        password_confirmation: "",
    });
    useEffect(() => {
        isDisabled(true);
        if (response?.status === "error") {
            isDisabled(false);
        } else {
            setDataFormPassword({
                old_password: "",
                password: "",
                password_confirmation: "",
            });
        }
    }, [response]);
    return (
        <PasswordUserFormStyle>
            <input type="email" autoComplete="username" hidden />
            <ContainerFormUpdateStyle>
                {response?.status === "error" && (
                    <ErrorMessage message={response?.message} />
                )}
                <ContainerInputStyle $disabled={disabled}>
                    <label htmlFor="CurrentPassword">Current password</label>
                    <WSInput
                        type="password"
                        id="CurrentPassword"
                        placeholder="old password"
                        autocomplete="current-password"
                        disabled={disabled}
                        value={dataFormPassword.old_password}
                        warning={response?.warning?.old_password}
                        onChange={(e) => {
                            setDataFormPassword({
                                ...dataFormPassword,
                                old_password: e.target.value,
                            });
                        }}
                    />
                </ContainerInputStyle>
                <ContainerInputStyle $disabled={disabled}>
                    <label htmlFor="NewPassword">New password</label>
                    <WSInput
                        type="password"
                        id="NewPassword"
                        placeholder="qwerty12345"
                        autocomplete="current-password"
                        disabled={disabled}
                        value={dataFormPassword.password}
                        warning={response?.warning?.password}
                        onChange={(e) => {
                            setDataFormPassword({
                                ...dataFormPassword,
                                password: e.target.value,
                            });
                        }}
                    />
                </ContainerInputStyle>
                <ContainerInputStyle $disabled={disabled}>
                    <label htmlFor="confirmPassword">Password confirm</label>
                    <WSInput
                        type="password"
                        id="confirmPassword"
                        placeholder="qwerty12345"
                        autocomplete="current-password"
                        disabled={disabled}
                        value={dataFormPassword.password_confirmation}
                        warning={response?.warning?.password_confirmation}
                        onChange={(e) => {
                            setDataFormPassword({
                                ...dataFormPassword,
                                password_confirmation: e.target.value,
                            });
                        }}
                    />
                </ContainerInputStyle>
                <ContainerBtnStyle>
                    {disabled ? (
                        <WSButton
                            onClick={(e) => {
                                e.preventDefault();
                                isDisabled(false);
                            }}
                            upper
                            maxWidth={"250px"}
                        >
                            Activated Inputs
                        </WSButton>
                    ) : loading ? (
                        <Loading />
                    ) : (
                        <WSButton
                            onClick={(e) => {
                                e.preventDefault();
                                changeUser(dataFormPassword, current_user);
                            }}
                            upper
                            maxWidth={"250px"}
                        >
                            Update!
                        </WSButton>
                    )}
                </ContainerBtnStyle>
            </ContainerFormUpdateStyle>
        </PasswordUserFormStyle>
    );
};

export default PasswordUserForm;
