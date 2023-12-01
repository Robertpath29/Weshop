import { useState } from "react";
import { newUser } from "../api/user/newUser";

export const useUser = () => {
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

    return {
        crateUser,
        setResponse,
        loading,
        response,
    };
};
