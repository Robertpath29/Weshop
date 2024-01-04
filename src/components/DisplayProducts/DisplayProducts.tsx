import React, { useState } from "react";
import { DisplayProductsStyle } from "./displayProducts.style";
import FilterDisplay from "./FilterDisplay/FilterDisplay";
import OutputProducts from "./OutputProducts/OutputProducts";

const DisplayProducts = () => {
    const [categoryProduct, setCategoryProduct] = useState<string>("");
    const [valueRange, setValueRange] = useState<number[]>([0, 0]);
    const [dataSizes, setDataSizes] = useState<string>("");
    const [keyword, setKeyword] = useState<string>("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pathHistory, setPathHistory] = useState({
        category: "",
        sort: "",
        keyword: "",
    });
    const [activeKeyword, setActiveKeyword] = useState({
        tShirt: false,
        black: false,
        white: false,
        fashion: false,
        woman: false,
        man: false,
    });

    return (
        <DisplayProductsStyle>
            <FilterDisplay
                setCurrentPage={setCurrentPage}
                activeKeyword={activeKeyword}
                setActiveKeyword={setActiveKeyword}
                pathHistory={pathHistory}
                setPathHistory={setPathHistory}
                dataSizes={dataSizes}
                keyword={keyword}
                setDataSizes={setDataSizes}
                setCategoryProduct={setCategoryProduct}
                setValueRange={setValueRange}
                setKeyword={setKeyword}
            />
            <OutputProducts
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setActiveKeyword={setActiveKeyword}
                setKeyword={setKeyword}
                pathHistory={pathHistory}
                setPathHistory={setPathHistory}
                dataSizes={dataSizes}
                categoryProduct={categoryProduct}
                valueRange={valueRange}
                keyword={keyword}
            />
        </DisplayProductsStyle>
    );
};

export default DisplayProducts;
