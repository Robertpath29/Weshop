import { saveUserCookie } from "../../utils/saveUserCookie";

import { appPages, appPagesUser } from "../../routers/routers";
import { logInType } from "./logIn.types";

export const logIn: logInType = (
    result,
    getCurrent_user,
    dataLogin,
    routeHome,
    setPages,
    setError
) => {
    if ("data" in result) {
        if (result.data.status === "success") {
            if (dataLogin) {
                if (routeHome) routeHome("/");
                saveUserCookie(
                    result.data.current_user.id,
                    result.data.remember_token
                );
            }

            if (setPages) setPages(appPagesUser);
            setTimeout(() => {
                getCurrent_user(result.data.current_user);
            }, 100);
        } else {
            if (setError && dataLogin) {
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
