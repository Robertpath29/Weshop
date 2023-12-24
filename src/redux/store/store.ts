import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../combineReducer/combineReducer";
import { heroBannerImgApi } from "./heroBannerImg/heroBannerImg.api";
import { sessionApi } from "./session/session.api";
import { usersAdminPanelApi } from "./usersAdminPanel/usersAdminPanel.api";
import { productsApi } from "./products/products.api";

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            heroBannerImgApi.middleware,
            sessionApi.middleware,
            usersAdminPanelApi.middleware,
            productsApi.middleware
        ),
});

export type TypeRootState = ReturnType<typeof store.getState>;
