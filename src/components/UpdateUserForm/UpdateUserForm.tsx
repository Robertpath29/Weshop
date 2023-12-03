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
        if (response?.status === "error") isDisabled(false);
    }, [response]);

    const [dataFormUpdate, setDataFormUpdate] = useState({
        name: current_user.name,
        email: current_user.email,
        last_name: current_user.last_name || "",
        date_of_birth: current_user.date_of_birth || "",
        country: current_user.country || "",
        city: current_user.city || "",
        address: current_user.address || "",
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
                        autocomplete="username"
                        disabled={disabled}
                        value={dataFormUpdate.name}
                        warning={response?.warning?.name}
                        onChange={(e) => {
                            setDataFormUpdate({
                                ...dataFormUpdate,
                                name: e.target.value,
                            });
                        }}
                    />
                </ContainerInputStyle>
                <ContainerInputStyle $disabled={disabled}>
                    <label htmlFor="lastName">last name</label>
                    <WSInput
                        type="text"
                        id="lastName"
                        disabled={disabled}
                        value={dataFormUpdate.last_name}
                        onChange={(e) => {
                            setDataFormUpdate({
                                ...dataFormUpdate,
                                last_name: e.target.value,
                            });
                        }}
                    />
                </ContainerInputStyle>
                <ContainerInputStyle $disabled={disabled}>
                    <label htmlFor="dateOfBirth">Date of birth</label>
                    <WSInput
                        type="date"
                        id="dateOfBirth"
                        disabled={disabled}
                        value={dataFormUpdate.date_of_birth}
                        onChange={(e) => {
                            setDataFormUpdate({
                                ...dataFormUpdate,
                                date_of_birth: e.target.value,
                            });
                        }}
                    />
                </ContainerInputStyle>
                <ContainerInputStyle $disabled={disabled}>
                    <label htmlFor="country">Country</label>
                    <WSInput
                        type="text"
                        id="country"
                        disabled={disabled}
                        value={dataFormUpdate.country}
                        onChange={(e) => {
                            setDataFormUpdate({
                                ...dataFormUpdate,
                                country: e.target.value,
                            });
                        }}
                    />
                </ContainerInputStyle>
                <ContainerInputStyle $disabled={disabled}>
                    <label htmlFor="city">City</label>
                    <WSInput
                        type="text"
                        id="city"
                        disabled={disabled}
                        value={dataFormUpdate.city}
                        onChange={(e) => {
                            setDataFormUpdate({
                                ...dataFormUpdate,
                                city: e.target.value,
                            });
                        }}
                    />
                </ContainerInputStyle>
                <ContainerInputStyle $disabled={disabled}>
                    <label htmlFor="address">Address</label>
                    <WSInput
                        type="text"
                        id="address"
                        disabled={disabled}
                        value={dataFormUpdate.address}
                        onChange={(e) => {
                            setDataFormUpdate({
                                ...dataFormUpdate,
                                address: e.target.value,
                            });
                        }}
                    />
                </ContainerInputStyle>
                <ContainerInputStyle $disabled={disabled}>
                    <label htmlFor="email">Email</label>
                    <WSInput
                        type="email"
                        id="email"
                        disabled={disabled}
                        value={dataFormUpdate.email}
                        warning={response?.warning?.email}
                        onChange={(e) => {
                            setDataFormUpdate({
                                ...dataFormUpdate,
                                email: e.target.value,
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
