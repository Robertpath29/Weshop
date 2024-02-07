import { combineReducers } from "@reduxjs/toolkit";
import { heroBannerImgApi } from "../store/heroBannerImg/heroBannerImg.api";
import { sessionApi } from "../store/session/session.api";
import { reducer as userReducer } from "../store/userSlice/userSlice";
import { reducer as filterReducer } from "../store/FilterSlice/filterSlice";
import { reducer as basketReducer } from "../store/basketSlice/basketSlice";
import { usersAdminPanelApi } from "../store/usersAdminPanel/usersAdminPanel.api";
import { productsApi } from "../store/products/products.api";

export const reducers = combineReducers({
    user: userReducer,
    filterProduct: filterReducer,
    basketReducer: basketReducer,
    [heroBannerImgApi.reducerPath]: heroBannerImgApi.reducer,
    [sessionApi.reducerPath]: sessionApi.reducer,
    [usersAdminPanelApi.reducerPath]: usersAdminPanelApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
});

export type reducersType = ReturnType<typeof reducers>;
