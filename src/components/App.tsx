import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { appPages, appPagesUser } from "../routers/routers";
import { useSelector } from "react-redux";
import { reducersType } from "../redux/combineReducer/combineReducer";

function App() {
    const user = useSelector((state: reducersType) => state.user);

    const userPresent = useMemo(() => {
        if (user.email) return true;

        return false;
    }, [user]);

    return (
        <BrowserRouter>
            <Routes>
                {userPresent
                    ? appPagesUser.map((route) => (
                          <Route
                              path={route.path}
                              element={route.element}
                              key={route.path}
                          />
                      ))
                    : appPages.map((route) => (
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
