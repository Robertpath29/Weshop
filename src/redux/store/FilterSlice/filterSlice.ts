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
};

export const filterProductSlice = createSlice({
    name: "filterProduct",
    initialState,
    reducers: {
        getNumberProductCategory: (state, { payload }) => {
            state.categoryCountProduct = payload;
        },
    },
});

export const { actions, reducer } = filterProductSlice;
