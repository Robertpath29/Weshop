import React, { FC } from "react";
import { FilterOutputStyle } from "./filterOutput.style";
import ProductDisplayOption from "./ProductDisplayOption/ProductDisplayOption";
import FilterColor from "./FilterColor/FilterColor";
import SortBy from "./SortBy/SortBy";
import Shows from "./Shows/Shows";

const FilterOutput: FC<{
    setPerPage: React.Dispatch<React.SetStateAction<number>>;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
    setColor: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setPerPage, setSortBy, setColor }) => {
    return (
        <FilterOutputStyle>
            <ProductDisplayOption />
            <FilterColor setColor={setColor} />
            <SortBy setSortBy={setSortBy} />
            <Shows setPerPage={setPerPage} />
        </FilterOutputStyle>
    );
};

export default FilterOutput;
