import { useState } from "react";
import { newUser } from "../api/user/newUser";
import { userType } from "../redux/store/userSlice/userSlice.types";
import { updateUser } from "../api/user/updateUser";
import { useAction } from "./useAction";

export const useUser = () => {
    const { getCurrent_user } = useAction();
    const [loading, isLoading] = useState(false);
    const [response, setResponse] = useState<{
        status: string;
        message: string;
        warning?: {
            name?: string;
            email?: string;
            password?: string;
            password_confirmation?: string;
        };
    }>();

    const crateUser = (
        setDataFormRegister: React.Dispatch<
            React.SetStateAction<{
                user: {
                    name: string;
                    email: string;
                    password: string;
                    password_confirmation: string;
                };
            }>
        >,
        dataFormRegister: {
            user: {
                name: string;
                email: string;
                password: string;
                password_confirmation: string;
            };
        }
    ) => {
        isLoading(true);
        newUser(isLoading, setResponse, setDataFormRegister, dataFormRegister);
    };

    const changeUser = async (
        dataFormUpdate: {
            user: {
                name: string | undefined;
                email: string | undefined;
            };
        },
        current_user: userType
    ) => {
        isLoading(true);
        updateUser(
            dataFormUpdate,
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
