import React, { useEffect, useState } from "react";
import { DisplayProductsStyle } from "./displayProducts.style";
import FilterDisplay from "./FilterDisplay/FilterDisplay";
import OutputProducts from "./OutputProducts/OutputProducts";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducer/combineReducer";

const DisplayProducts = () => {
    const [categoryProduct, setCategoryProduct] = useState<string>("");
    const [valueRange, setValueRange] = useState<number[]>([0, 0]);
    const [dataSizes, setDataSizes] = useState<string>("");

    return (
        <DisplayProductsStyle>
            <FilterDisplay
                dataSizes={dataSizes}
                setDataSizes={setDataSizes}
                setCategoryProduct={setCategoryProduct}
                setValueRange={setValueRange}
            />
            <OutputProducts
                dataSizes={dataSizes}
                categoryProduct={categoryProduct}
                valueRange={valueRange}
            />
        </DisplayProductsStyle>
    );
};

export default DisplayProducts;
