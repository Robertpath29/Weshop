import { responseType } from "../../types/response.types";
import { userType } from "../../types/user.types";

export type newUserType = {
    (
        isLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setResponse: React.Dispatch<
            React.SetStateAction<responseType | undefined>
        >,
        setDataFormRegister: (
            value: React.SetStateAction<{
                name: string;
                email: string;
                password: string;
                password_confirmation: string;
            }>
        ) => void,
        dataFormRegister: userType
    ): void;
};
