export const getUserCookie = () => {
    const dataCookie: { id?: number; remember_token?: string } = {};
    const cookieName = document.cookie.split("; ");
    const user_idCookie = cookieName.find((cookieName) =>
        cookieName.startsWith("id=")
    );
    const remember_token_digestCookie = cookieName.find((cookieName) =>
        cookieName.startsWith("remember_token=")
    );

    const user_id = user_idCookie?.split("=")[1];
    const remember_token = remember_token_digestCookie?.split("=")[1];
    if (user_id && remember_token) {
        dataCookie.id = Number(user_id);
        dataCookie.remember_token = remember_token;
    }

    return dataCookie;
};
