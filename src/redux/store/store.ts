import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../combineReducer/combineReducer";
import { heroBannerImgApi } from "./heroBannerImg/heroBannerImg.api";

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(heroBannerImgApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
