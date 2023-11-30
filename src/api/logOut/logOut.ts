import { deleteCookie } from "../../utils/deleteCookie";
import { SESSION_URL, axiosDelete } from "../axiosQuery";
import { logOutType } from "./logOut.types";

export const logOut: logOutType = async (deleteCurrent_user, current_user) => {
    axiosDelete(SESSION_URL + `/${current_user.id}`);
    deleteCookie("id");
    deleteCookie("remember_token");
    deleteCurrent_user();
};
