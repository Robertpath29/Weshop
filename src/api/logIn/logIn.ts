import { saveUserCookie } from "../../utils/saveUserCookie";

import {
    appPages,
    appPagesAdmin,
    appPagesModerator,
    appPagesUser,
} from "../../routers/routers";
import { logInType } from "./logIn.types";

export const logIn: logInType = (
    result,
    getCurrent_user,
    dataLogin,
    routeHome,
    setPages,
    setError,
    countIncorrectPassword,
    setCountIncorrectPassword
) => {
    if ("data" in result) {
        if (result.data.status === "success") {
            if (dataLogin) {
                if (routeHome) routeHome("/");
                saveUserCookie(
                    result.data.current_user?.id,
                    result.data.remember_token
                );
            }

            if (setPages) {
                if (result.data.current_user?.role === "admin") {
                    setPages([
                        ...appPagesUser,
                        ...appPagesModerator,
                        ...appPagesAdmin,
                    ]);
                } else if (result.data.current_user?.role === "moderator") {
                    setPages([...appPagesUser, ...appPagesModerator]);
                } else {
                    setPages(appPagesUser);
                }
            }
            setTimeout(() => {
                getCurrent_user(result.data.current_user);
            }, 100);
        } else {
            if (setError && dataLogin && result.data.message) {
                if (setCountIncorrectPassword && countIncorrectPassword) {
                    setCountIncorrectPassword(countIncorrectPassword + 1);
                }
                setError({
                    status: result.data.status,
                    message: result.data.message,
                });
            } else {
                console.log(result.data.message);
                if (setPages) setPages(appPages);
            }
        }
    }
};
