import { userType } from "./user.types";

export type responseType = {
    status: string;
    message?: string;
    remember_token?: string;
    current_user?: userType;
    warning?: warningType;
    oll_users?: userType[];
    images?: image[];
};

type warningType = {
    name?: string;
    email?: string;
    old_password?: string;
    password?: string;
    password_confirmation?: string;
};

export type image = {
    id: number;
    path: string;
    title: string;
    url: string;
    placeholder: string;
};
