import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { userType } from "../../types/user.types";

export type logOutType = {
    (
        deleteCurrent_user: ActionCreatorWithoutPayload<" user/deleteCurrent_user">,
        current_user: userType
    ): void;
};
