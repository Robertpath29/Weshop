import { FC } from "react";
import { USER_URL, axiosPost } from "../axiosQuery";
import { newUserType } from "./newUser.types";

export const newUser: newUserType = async (
    isLoading,
    setData,
    setDataFormRegister,
    dataFormRegister
) => {
    try {
        const status = await axiosPost(
            USER_URL,
            { user: dataFormRegister },
            isLoading
        );
        setData(status.data);
        if (status.data.status === "success")
            setDataFormRegister({
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            });
    } catch (error) {
        console.log(error);
    }
};
