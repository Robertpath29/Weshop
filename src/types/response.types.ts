import { userType } from "./user.types";

export type responseType = {
    status: string;
    message?: string;
    remember_token?: string;
    current_user?: userType;
    warning?: warningType;
    oll_users?: userType[];
    images?: image[];
    products?: products[];
    total_pages?: number;
};

type warningType = {
    name?: string;
    email?: string;
    old_password?: string;
    password?: string;
    password_confirmation?: string;
    title?: string;
    category?: string;
    type_of_clothing?: string;
    price?: string;
    old_price?: string;
};

export type products = {
    product: product;
    path_img: path_img[];
};

export type product = {
    id: number;
    title: string;
    description: string;
    category: string;
    type_of_clothing: string;
    color: string;
    sizes: string[];
    price: string;
    old_price: string;
    created_at: string;
    updated_at: string;
};

export type path_img = {
    id: number;
    url: string;
};

export type image = {
    id: number;
    path: string;
    title: string;
    url: string;
    placeholder: string;
};
