import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { USER_URL, axiosPut } from "../axiosQuery";
import { userType } from "../../types/user.types";
import { responseType } from "../../types/response.types";

export const updateUser = async (
    dataForm: userType,
    current_user: userType,
    isLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setResponse: React.Dispatch<React.SetStateAction<responseType | undefined>>,
    getCurrent_user: ActionCreatorWithPayload<any, " user/getCurrent_user">
) => {
    const response = await axiosPut(
        USER_URL + `/${current_user.id}`,
        { user: dataForm },
        isLoading
    );
    if (response.data.status === "success") {
        getCurrent_user(response.data.current_user);
    }
    setResponse(response.data);
};
