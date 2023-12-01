import React, { useEffect, useState } from "react";
import { PasswordUserFormStyle } from "./passwordUserForm.style";
import { ContainerFormUpdateStyle } from "../updateUserForm.style";
import { ContainerInputStyle } from "../../UI/WSInput/wsInput.style";
import WSInput from "../../UI/WSInput/WSInput";
import { ContainerBtnStyle } from "../../FlashMessage/flashMessage.style";
import WSButton from "../../UI/WSButton/WSButton";

const PasswordUserForm = () => {
    const [disabled, isDisabled] = useState(true);
    useEffect(() => {
        isDisabled(true);
    }, []);
    return (
        <PasswordUserFormStyle>
            <input type="email" autoComplete="username" hidden />
            <ContainerFormUpdateStyle>
                <ContainerInputStyle $disabled={disabled}>
                    <label htmlFor="CurrentPassword">Current password</label>
                    <WSInput
                        type="password"
                        id="CurrentPassword"
                        placeholder="qwerty12345"
                        autocomplete="current-password"
                        disabled={disabled}
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
                    ) : (
                        <WSButton
                            onClick={(e) => {
                                e.preventDefault();
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
