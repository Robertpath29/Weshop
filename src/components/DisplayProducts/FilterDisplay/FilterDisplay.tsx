import React, { useState } from "react";
import {
    ContainerBestSaleStyle,
    ContainerFilterPriceStyle,
    ContainerKeywordStyle,
    ContainerRangeStyle,
    FilterDisplayStyle,
} from "./filterDisplay.style";
import SliderRange from "../../UI/SliderRange/SliderRange";
import WSButton from "../../UI/WSButton/WSButton";
import FilterCheckBox from "./FilterCheckBox/FilterCheckBox";
import FilterCategory from "./FilterCategory/FilterCategory";

const FilterDisplay = () => {
    const [valueRange, setValueRange] = useState<number[]>([20, 50000]);
    const [dataSizes, setDataSizes] = useState<string[]>([]);

    return (
        <FilterDisplayStyle>
            <h1>Category</h1>
            <hr />
            <FilterCategory />
            <h1>price by filter</h1>
            <hr />
            <ContainerRangeStyle>
                <SliderRange
                    maxValue={10000}
                    setValueRange={setValueRange}
                    valueRange={valueRange}
                />
                <ContainerFilterPriceStyle>
                    <p>
                        Price:
                        <span>{`$${valueRange[0]}-${valueRange[1]}`}</span>
                    </p>
                    <WSButton backgroundColor="transparent" onClick={() => {}}>
                        Filter
                    </WSButton>
                </ContainerFilterPriceStyle>
            </ContainerRangeStyle>
            <h1>Size</h1>
            <hr />
            <FilterCheckBox dataSizes={dataSizes} setDataSizes={setDataSizes} />
            <h1>best sale</h1>
            <hr />
            <ContainerBestSaleStyle></ContainerBestSaleStyle>
            <h1>keyword</h1>
            <hr />
            <ContainerKeywordStyle>
                <WSButton onClick={() => {}}>T-shirt</WSButton>
                <WSButton onClick={() => {}}>Black</WSButton>
                <WSButton onClick={() => {}}>White</WSButton>
                <WSButton onClick={() => {}}>Fashion</WSButton>
                <WSButton onClick={() => {}}>Woman</WSButton>
                <WSButton onClick={() => {}}>Man</WSButton>
            </ContainerKeywordStyle>
        </FilterDisplayStyle>
    );
};

export default FilterDisplay;
