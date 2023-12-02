import React, { useEffect, useState } from "react";
import {
    ContainerFormUpdateStyle,
    UpdateUserFormStyle,
} from "./updateUserForm.style";
import WSInput from "../UI/WSInput/WSInput";
import { ContainerInputStyle } from "../UI/WSInput/wsInput.style";
import { ContainerBtnStyle } from "../FlashMessage/flashMessage.style";
import WSButton from "../UI/WSButton/WSButton";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducer/combineReducer";
import { useUser } from "../../hooks/useUser";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loading/Loading";

const UpdateUserForm = () => {
    const current_user = useSelector((state: reducersType) => state.user);
    const [disabled, isDisabled] = useState(true);
    const { changeUser, response, loading } = useUser();
    useEffect(() => {
        isDisabled(true);
    }, [response]);

    const [dataFormUpdate, setDataFormUpdate] = useState({
        user: {
            name: current_user.name,
            email: current_user.email,
        },
    });

    return (
        <UpdateUserFormStyle>
            <ContainerFormUpdateStyle>
                {response?.status === "error" && (
                    <ErrorMessage message={response?.message} />
                )}
                <ContainerInputStyle $disabled={disabled}>
                    <label htmlFor="name">Name</label>
                    <WSInput
                        type="text"
                        id="name"
                        placeholder="Alex"
                        autocomplete="username"
                        disabled={disabled}
                        value={dataFormUpdate.user.name}
                        warning={response?.warning?.name}
                        onChange={(e) => {
                            setDataFormUpdate({
                                ...dataFormUpdate,
                                user: {
                                    ...dataFormUpdate.user,
                                    name: e.target.value,
                                },
                            });
                        }}
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
                        value={dataFormUpdate.user.email}
                        warning={response?.warning?.email}
                        onChange={(e) => {
                            setDataFormUpdate({
                                ...dataFormUpdate,
                                user: {
                                    ...dataFormUpdate.user,
                                    email: e.target.value,
                                },
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
                                changeUser(dataFormUpdate, current_user);
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
