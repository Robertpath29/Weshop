import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAction } from "../../hooks/useAction";
import { PRODUCTS_URL, axiosGet } from "../axiosQuery";
export const getBasketProduct = async (
    id: number,
    addNewProduct: ActionCreatorWithPayload<any, "basket/addNewProduct">
) => {
    const response = await axiosGet(`${PRODUCTS_URL}/${id}`);
    addNewProduct(response.data);
};
