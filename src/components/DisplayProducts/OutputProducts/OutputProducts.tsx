import React from "react";
import { OutputProductsStyle } from "./outputProducts.style";
import FilterOutput from "./FilterOutput/FilterOutput";

const OutputProducts = () => {
    return (
        <OutputProductsStyle>
            <FilterOutput />
            <hr />
        </OutputProductsStyle>
    );
};

export default OutputProducts;
