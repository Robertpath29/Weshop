import React, { useState } from "react";
import { DisplayProductsStyle } from "./displayProducts.style";
import FilterDisplay from "./FilterDisplay/FilterDisplay";
import OutputProducts from "./OutputProducts/OutputProducts";

const DisplayProducts = () => {
    const [categoryProduct, setCategoryProduct] = useState<string>("");

    return (
        <DisplayProductsStyle>
            <FilterDisplay setCategoryProduct={setCategoryProduct} />
            <OutputProducts categoryProduct={categoryProduct} />
        </DisplayProductsStyle>
    );
};

export default DisplayProducts;
