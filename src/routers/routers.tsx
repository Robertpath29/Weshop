import { Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import { routersType } from "./routersType";
import NotFound404Page from "../pages/NotFound404Page/NotFound404Page";
import LoginPage from "../pages/LoginPage/LoginPage";

export const appPages: routersType = [
    { path: "/", element: <MainPage /> },
    { path: "*", element: <NotFound404Page /> },
    { path: "/login", element: <LoginPage /> },
];
