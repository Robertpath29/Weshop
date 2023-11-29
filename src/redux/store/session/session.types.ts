import { userType } from "../userSlice/userSlice.types";

export type sessionType = {
    status: string;
    current_user: userType;
    message: string;
    remember_token: string;
};
