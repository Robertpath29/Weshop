import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appPages } from "../routers/routers";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {appPages.map((route) => (
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
