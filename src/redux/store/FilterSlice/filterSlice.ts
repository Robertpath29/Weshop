import { createSlice } from "@reduxjs/toolkit";
import { filterSliceType } from "./filterSlice.types";

const initialState: filterSliceType = {
    categoryCountProduct: {
        woman: 0,
        man: 0,
        kids: 0,
        bags: 0,
        accessories: 0,
        watch: 0,
    },
    countSizes: {
        xs: 0,
        s: 0,
        m: 0,
        l: 0,
        xl: 0,
        xxl: 0,
        xxxl: 0,
    },
    max_price: 0,
    best_sale: [],
};

export const filterProductSlice = createSlice({
    name: "filterProduct",
    initialState,
    reducers: {
        getNumberProductCategory: (state, { payload }) => {
            state.categoryCountProduct = payload;
        },
        getMaxPrice: (state, { payload }) => {
            state.max_price = payload;
        },
        getCountSizes: (state, { payload }) => {
            state.countSizes = payload;
        },
        getBestSale: (state, { payload }) => {
            state.best_sale = payload;
        },
    },
});

export const { actions, reducer } = filterProductSlice;
