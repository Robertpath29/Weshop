import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../combineReducer/combineReducer";
import { heroBannerImgApi } from "./heroBannerImg/heroBannerImg.api";
import { sessionApi } from "./session/session.api";

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            heroBannerImgApi.middleware,
            sessionApi.middleware
        ),
});

export type TypeRootState = ReturnType<typeof store.getState>;
