import React, { FC } from "react";
import { WSButtonCountProductsStyle } from "./wSButtonCountProducts.style";
import { wSButtonCountProductsType } from "./wSButtonCountProducts.types";

const WSButtonCountProducts: FC<wSButtonCountProductsType> = ({
    countProduct,
}) => {
    return (
        <WSButtonCountProductsStyle>
            <button>-</button>
            <span>{countProduct}</span>
            <button>+</button>
        </WSButtonCountProductsStyle>
    );
};

export default WSButtonCountProducts;
