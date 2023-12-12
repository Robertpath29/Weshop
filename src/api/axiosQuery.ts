import axios from "axios";
export const URL_SERVER = "http://192.168.1.108:5000";

export const HERO_BANNER_IMG_URL = `${URL_SERVER}/hero/banner/images/`;
export const USER_URL = `${URL_SERVER}/users`;
export const SESSION_URL = `${URL_SERVER}/sessions`;
export const PASSWORD_RESET_URL = `${URL_SERVER}/password_reset`;
export const ADMIN_USERS_URL = `${URL_SERVER}/admin/users`;

export async function axiosGet(
    url: string,
    params?: object,
    isLoading?: React.Dispatch<React.SetStateAction<boolean>>
) {
    return await axios
        .get(url, { params })
        .then((response) => response)
        .catch((e) => e.message)
        .finally(() => {
            if (isLoading) isLoading(false);
        });
}
export async function axiosPost(
    url: string,
    data: object | FormData,
    isLoading?: React.Dispatch<React.SetStateAction<boolean>>
) {
    return await axios
        .post(url, data)
        .then((response) => response)
        .catch((e) => e.message)
        .finally(() => {
            if (isLoading) isLoading(false);
        });
}

export async function axiosDelete(
    url: string,
    params?: object,
    isLoading?: React.Dispatch<React.SetStateAction<boolean>>
) {
    return await axios
        .delete(url, { params })
        .then((response) => response)
        .catch((e) => e.message)
        .finally(() => {
            if (isLoading) isLoading(false);
        });
}

export async function axiosPut(
    url: string,
    data: object | FormData,
    isLoading?: React.Dispatch<React.SetStateAction<boolean>>
) {
    return await axios
        .put(url, data)
        .then((response) => response)
        .catch((e) => e.message)
        .finally(() => {
            if (isLoading) isLoading(false);
        });
}
