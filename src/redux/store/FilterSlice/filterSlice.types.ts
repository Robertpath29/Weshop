import { products } from "../../../types/response.types";

export type filterSliceType = {
    categoryCountProduct: {
        woman: number;
        man: number;
        kids: number;
        bags: number;
        accessories: number;
        watch: number;
    };
    countSizes: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        xxl: number;
        xxxl: number;
    };
    max_price: number;
    best_sale: products[];
};
