import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appPages, zeroPage } from "../routers/routers";
import { getUserCookie } from "../utils/getUserCookie";
import { useSession } from "../hooks/useSession";
import { useSelector } from "react-redux";
import { reducersType } from "../redux/combineReducer/combineReducer";

function App() {
    const [pages, setPages] = useState(zeroPage);
    const { createSession } = useSession(undefined, setPages);
    const current_user = useSelector((state: reducersType) => state.user);

    useEffect(() => {
        const dataCookie = getUserCookie();
        if (dataCookie.remember_token && !current_user.name) {
            createSession(undefined, dataCookie);
        } else {
            setPages(appPages);
        }
    }, [current_user]);

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
