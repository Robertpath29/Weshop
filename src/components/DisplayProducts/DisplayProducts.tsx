import React from "react";
import { DisplayProductsStyle } from "./displayProducts.style";
import FilterDisplay from "./FilterDisplay/FilterDisplay";
import OutputProducts from "./OutputProducts/OutputProducts";

const DisplayProducts = () => {
    return (
        <DisplayProductsStyle>
            <FilterDisplay />
            <OutputProducts />
        </DisplayProductsStyle>
    );
};

export default DisplayProducts;
