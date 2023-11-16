import axios from "axios";
export const URL_SERVER = "http://127.0.0.1:5000";

export const HERO_BANNER_IMG_URL = `${URL_SERVER}/hero/banner/images/`;

export async function axiosGet(url: string, params?: object) {
    return await axios
        .get(url, { params: params })
        .then((response) => response)
        .catch((e) => e.message);
}
