import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    appPages,
    appPagesAdmin,
    appPagesModerator,
    appPagesUser,
    zeroPage,
} from "../routers/routers";
import { getUserCookie } from "../utils/getUserCookie";
import { useSession } from "../hooks/useSession";
import { useSelector } from "react-redux";
import { reducersType } from "../redux/combineReducer/combineReducer";
import { useAction } from "../hooks/useAction";
import { getBasketProduct } from "../api/basket/getBasketProduct";

function App() {
    const [pages, setPages] = useState(zeroPage);
    const { createSession } = useSession(undefined, setPages);
    const current_user = useSelector((state: reducersType) => state.user);
    const { addNewProduct } = useAction();
    useEffect(() => {
        const dataCookie = getUserCookie();
        if (dataCookie.remember_token && !current_user.name) {
            createSession(undefined, dataCookie);
        } else {
            if (!current_user.name) {
                setPages(appPages);
            } else {
                if (current_user.role === "admin") {
                    setPages([
                        ...appPagesAdmin,
                        ...appPagesModerator,
                        ...appPagesUser,
                    ]);
                } else if (current_user.role === "moderator") {
                    setPages([...appPagesModerator, ...appPagesUser]);
                } else {
                    setPages(appPagesUser);
                }
            }
        }
    }, [current_user]);

    useEffect(() => {
        const idsProductBasket = localStorage.getItem("basketProduct");
        if (idsProductBasket) {
            const arrayId: number[] = [];
            idsProductBasket.split(",").map((id) => arrayId.push(Number(id)));
            arrayId.forEach((id) => {
                getBasketProduct(id, addNewProduct);
            });
        }
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                {pages.map((route) => (
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
