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
    setProductDisplay: React.Dispatch<React.SetStateAction<string>>;
    setKeyword: React.Dispatch<React.SetStateAction<string>>;
    setPathHistory: React.Dispatch<
        React.SetStateAction<{
            category: string;
            sort: string;
            keyword: string;
        }>
    >;
    setActiveKeyword: React.Dispatch<
        React.SetStateAction<{
            tShirt: boolean;
            black: boolean;
            white: boolean;
            fashion: boolean;
            woman: boolean;
            man: boolean;
        }>
    >;
    pathHistory: {
        category: string;
        sort: string;
        keyword: string;
    };
}> = ({
    setPerPage,
    setSortBy,
    setColor,
    setProductDisplay,
    setPathHistory,
    pathHistory,
    setKeyword,
    setActiveKeyword,
}) => {
    return (
        <FilterOutputStyle>
            <ProductDisplayOption setProductDisplay={setProductDisplay} />
            <FilterColor setColor={setColor} />
            <SortBy
                setActiveKeyword={setActiveKeyword}
                setKeyword={setKeyword}
                setSortBy={setSortBy}
                setPathHistory={setPathHistory}
                pathHistory={pathHistory}
            />
            <Shows setPerPage={setPerPage} />
        </FilterOutputStyle>
    );
};

export default FilterOutput;
