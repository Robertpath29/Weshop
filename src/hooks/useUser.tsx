import { useState } from "react";
import { newUser } from "../api/user/newUser";
import { useAction } from "./useAction";
import { userType } from "../types/user.types";
import { updateUser } from "../api/user/updateUser";
import { responseType } from "../types/response.types";

export const useUser = () => {
    const { getCurrent_user } = useAction();
    const [loading, isLoading] = useState(false);
    const [response, setResponse] = useState<responseType>();

    const crateUser = (
        setDataFormRegister: React.Dispatch<
            React.SetStateAction<{
                name: string;
                email: string;
                password: string;
                password_confirmation: string;
            }>
        >,
        dataForm: userType
    ) => {
        isLoading(true);
        newUser(isLoading, setResponse, setDataFormRegister, dataForm);
    };

    const changeUser = async (dataForm: userType, current_user: userType) => {
        isLoading(true);
        updateUser(
            dataForm,
            current_user,
            isLoading,
            setResponse,
            getCurrent_user
        );
    };

    return {
        crateUser,
        setResponse,
        changeUser,
        loading,
        response,
    };
};
