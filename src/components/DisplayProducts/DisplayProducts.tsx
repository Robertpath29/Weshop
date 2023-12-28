import React, { useState } from "react";
import { DisplayProductsStyle } from "./displayProducts.style";
import FilterDisplay from "./FilterDisplay/FilterDisplay";
import OutputProducts from "./OutputProducts/OutputProducts";

const DisplayProducts = () => {
    const [categoryProduct, setCategoryProduct] = useState<string>("");
    const [valueRange, setValueRange] = useState<number[]>([0, 0]);
    const [dataSizes, setDataSizes] = useState<string>("");
    const [keyword, setKeyword] = useState<string>("");

    return (
        <DisplayProductsStyle>
            <FilterDisplay
                dataSizes={dataSizes}
                keyword={keyword}
                setDataSizes={setDataSizes}
                setCategoryProduct={setCategoryProduct}
                setValueRange={setValueRange}
                setKeyword={setKeyword}
            />
            <OutputProducts
                dataSizes={dataSizes}
                categoryProduct={categoryProduct}
                valueRange={valueRange}
                keyword={keyword}
            />
        </DisplayProductsStyle>
    );
};

export default DisplayProducts;
