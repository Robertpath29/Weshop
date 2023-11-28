import { combineReducers } from "@reduxjs/toolkit";
import { heroBannerImgApi } from "../store/heroBannerImg/heroBannerImg.api";
import { sessionApi } from "../store/session/session.api";
import { reducer as userReducer } from "../store/userSlice/userSlice";

export const reducers = combineReducers({
    user: userReducer,
    [heroBannerImgApi.reducerPath]: heroBannerImgApi.reducer,
    [sessionApi.reducerPath]: sessionApi.reducer,
});
