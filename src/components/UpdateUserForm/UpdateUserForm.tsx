import React, { useEffect, useState } from "react";
import {
    ContainerFormUpdateStyle,
    UpdateUserFormStyle,
} from "./updateUserForm.style";
import WSInput from "../UI/WSInput/WSInput";
import { ContainerInputStyle } from "../UI/WSInput/wsInput.style";
import { ContainerBtnStyle } from "../FlashMessage/flashMessage.style";
import WSButton from "../UI/WSButton/WSButton";

const UpdateUserForm = () => {
    const [disabled, isDisabled] = useState(true);
    useEffect(() => {
        isDisabled(true);
    }, []);
    return (
        <UpdateUserFormStyle>
            <ContainerFormUpdateStyle>
                <ContainerInputStyle $disabled={disabled}>
                    <label htmlFor="name">Name</label>
                    <WSInput
                        type="text"
                        id="name"
                        placeholder="Alex"
                        autocomplete="username"
                        disabled={disabled}
                    />
                </ContainerInputStyle>
                <ContainerInputStyle $disabled={disabled}>
                    <label htmlFor="email">Email</label>
                    <WSInput
                        type="email"
                        id="email"
                        placeholder="gmail@gmail.com"
                        autocomplete="username"
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
        </UpdateUserFormStyle>
    );
};

export default UpdateUserForm;
