import { createSlice } from "@reduxjs/toolkit";
import { basketType } from "./basketSlice.types";

const initialState: basketType = { basketProduct: [] };

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addNewProduct: (state, { payload }) => {
            const isProductInBasket = state.basketProduct.some(
                (basketItem) => basketItem.product.id === payload.product.id
            );

            if (!isProductInBasket) {
                state.basketProduct.push(payload);
            }
        },

        deleteProductInBasket: (state, { payload }) => {
            state.basketProduct = state.basketProduct.filter(
                (basketItem) => basketItem.product.id !== payload
            );
        },
    },
});

export const { actions, reducer } = basketSlice;
