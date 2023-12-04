import { Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import { routersType } from "./routersType";
import NotFound404Page from "../pages/NotFound404Page/NotFound404Page";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import UserSettingsPage from "../pages/UserSettingsPage/UserSettingsPage";
import PasswordResetPage from "../pages/PasswordResetPage/PasswordResetPage";

export const zeroPage: routersType = [{ path: "/", element: <></> }];

export const appPages: routersType = [
    { path: "/", element: <MainPage /> },
    { path: "*", element: <NotFound404Page /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/login/register", element: <RegisterPage /> },
    { path: "/password_reset/edit", element: <PasswordResetPage /> },
];
export const appPagesUser: routersType = [
    { path: "/", element: <MainPage /> },
    { path: "*", element: <NotFound404Page /> },
    { path: "/user/setting", element: <UserSettingsPage /> },
];
