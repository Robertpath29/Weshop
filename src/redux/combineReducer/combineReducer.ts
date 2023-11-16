import { combineReducers } from "@reduxjs/toolkit";
import { heroBannerImgApi } from "../store/heroBannerImg/heroBannerImg.api";

export const reducers = combineReducers({
    [heroBannerImgApi.reducerPath]: heroBannerImgApi.reducer,
});
