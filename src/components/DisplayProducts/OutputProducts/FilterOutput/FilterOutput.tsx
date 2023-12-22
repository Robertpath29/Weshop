import React from "react";
import { FilterOutputStyle } from "./filterOutput.style";
import ProductDisplayOption from "./ProductDisplayOption/ProductDisplayOption";
import FilterColor from "./FilterColor/FilterColor";
import SortBy from "./SortBy/SortBy";
import Shows from "./Shows/Shows";

const FilterOutput = () => {
    return (
        <FilterOutputStyle>
            <ProductDisplayOption />
            <FilterColor />
            <SortBy />
            <Shows />
        </FilterOutputStyle>
    );
};

export default FilterOutput;
