import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryCountProduct: {
        woman: 0,
        man: 0,
        kids: 0,
        bags: 0,
        accessories: 0,
        watch: 0,
    },
    max_price: 0,
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
    },
});

export const { actions, reducer } = filterProductSlice;
