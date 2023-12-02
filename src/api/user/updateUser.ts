import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { userType } from "../../redux/store/userSlice/userSlice.types";
import { USER_URL, axiosPut } from "../axiosQuery";

export const updateUser = async (
    dataFormUpdate: {
        user: {
            name: string | undefined;
            email: string | undefined;
        };
    },
    current_user: userType,
    isLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setResponse: React.Dispatch<
        React.SetStateAction<
            | {
                  status: string;
                  message: string;
                  warning?:
                      | {
                            name?: string | undefined;
                            email?: string | undefined;
                            password?: string | undefined;
                            password_confirmation?: string | undefined;
                        }
                      | undefined;
              }
            | undefined
        >
    >,
    getCurrent_user: ActionCreatorWithPayload<any, " user/getCurrent_user">
) => {
    const response = await axiosPut(
        USER_URL + `/${current_user.id}`,
        dataFormUpdate,
        isLoading
    );
    if (response.data.status === "success") {
        getCurrent_user(response.data.current_user);
    }
    setResponse(response.data);
};
