import React, { FC } from "react";
import { ProductHistoryStyle } from "./productHistory.style";
import { product } from "../../../types/response.types";

const ProductHistory: FC<{ product: product }> = ({ product }) => {
    return (
        <ProductHistoryStyle>
            <p>{product.history}</p>
        </ProductHistoryStyle>
    );
};

export default ProductHistory;
