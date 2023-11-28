import { combineReducers } from "@reduxjs/toolkit";
import { heroBannerImgApi } from "../store/heroBannerImg/heroBannerImg.api";
import { sessionApi } from "../store/session/session.api";

export const reducers = combineReducers({
    [heroBannerImgApi.reducerPath]: heroBannerImgApi.reducer,
    [sessionApi.reducerPath]: sessionApi.reducer,
});
