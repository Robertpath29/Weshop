import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { products } from "../types/response.types";

export const addNewProductToBasket = (
    product: products,
    addNewProduct: ActionCreatorWithPayload<any, "basket/addNewProduct">
) => {
    addNewProduct(product);
    const idsLocal = localStorage.getItem("basketProduct");
    const arrayIdProductInBasket: number[] = [];
    if (idsLocal) {
        idsLocal
            .split(",")
            .map((id) => arrayIdProductInBasket.push(Number(id)));
    }
    const isProductInBasket = arrayIdProductInBasket.some(
        (basketId) => basketId === product.product.id
    );

    if (!isProductInBasket) {
        arrayIdProductInBasket.push(product.product.id);
        localStorage.setItem("basketProduct", String(arrayIdProductInBasket));
    }
};
