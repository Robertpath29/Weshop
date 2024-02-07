import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export const deleteProductBasket = (
    id: number,
    deleteProductInBasket: ActionCreatorWithPayload<
        any,
        "basket/deleteProductInBasket"
    >
) => {
    deleteProductInBasket(id);
    const idsLocal = localStorage.getItem("basketProduct");
    let arrayIdProductInBasket: number[] = [];
    if (idsLocal) {
        idsLocal
            .split(",")
            .map((id) => arrayIdProductInBasket.push(Number(id)));
        arrayIdProductInBasket = arrayIdProductInBasket.filter(
            (idBasket) => idBasket !== id
        );
        localStorage.setItem("basketProduct", String(arrayIdProductInBasket));
    }
};
