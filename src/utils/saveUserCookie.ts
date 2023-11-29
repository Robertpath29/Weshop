export const saveUserCookie = (
    id: number | undefined,
    remember_token: string | undefined
) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 600000);
    document.cookie = `id = ${id}; expires=${expirationDate.toUTCString()}`;
    document.cookie = `remember_token = ${remember_token}; expires=${expirationDate.toUTCString()}`;
};
