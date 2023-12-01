import { FC } from "react";
import { REGISTER_NEW_USER_URL, axiosPost } from "../axiosQuery";
import { newUserType } from "./newUser.types";

export const newUser: newUserType = async (
    isLoading,
    setData,
    setDataFormRegister,
    dataFormRegister
) => {
    try {
        const status = await axiosPost(
            REGISTER_NEW_USER_URL,
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
    } catch (error) {
        console.log(error);
    }
};
