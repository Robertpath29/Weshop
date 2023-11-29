import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appPages, zeroPage } from "../routers/routers";
import { getUserCookie } from "../utils/getUserCookie";
import { useSession } from "../hooks/useSession";

function App() {
    const [pages, setPages] = useState(zeroPage);
    const { createSession } = useSession(undefined, setPages);

    useEffect(() => {
        const dataCookie = getUserCookie();
        if (dataCookie.remember_token) {
            createSession(undefined, dataCookie);
        } else {
            setPages(appPages);
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
