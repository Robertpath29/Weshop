import axios from "axios";
export const URL_SERVER = "http://127.0.0.1:5000";

export const HERO_BANNER_IMG_URL = `${URL_SERVER}/hero/banner/images/`;
export const REGISTER_NEW_USER_URL = `${URL_SERVER}/users`;
export const SESSION_URL = `${URL_SERVER}/sessions`;

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
