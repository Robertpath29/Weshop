import { Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import { routersType } from "./routersType";
import NotFound404Page from "../pages/NotFound404Page/NotFound404Page";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import UserSettingsPage from "../pages/UserSettingsPage/UserSettingsPage";
import PasswordResetPage from "../pages/PasswordResetPage/PasswordResetPage";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import ModeratorPanel from "../pages/ModeratorPanel/ModeratorPanel";
import ShopPage from "../pages/ShopPage/ShopPage";

export const zeroPage: routersType = [{ path: "/", element: <></> }];

export const appPages: routersType = [
    { path: "/", element: <MainPage /> },
    { path: "*", element: <NotFound404Page /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/login/register", element: <RegisterPage /> },
    { path: "/password_reset/edit", element: <PasswordResetPage /> },
    { path: "/shop", element: <ShopPage /> },
];
export const appPagesUser: routersType = [
    { path: "/", element: <MainPage /> },
    { path: "*", element: <NotFound404Page /> },
    { path: "/user/setting", element: <UserSettingsPage /> },
    { path: "/shop", element: <ShopPage /> },
];

export const appPagesAdmin: routersType = [
    { path: "/admin/panel", element: <AdminPanel /> },
];
export const appPagesModerator: routersType = [
    { path: "/moderator/panel", element: <ModeratorPanel /> },
];
