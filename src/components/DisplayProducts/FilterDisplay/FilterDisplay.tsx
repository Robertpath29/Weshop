import React, { FC, useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { reducersType } from "../../../redux/combineReducer/combineReducer";

const FilterDisplay: FC<{
    setCategoryProduct: React.Dispatch<React.SetStateAction<string>>;
    setValueRange: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({ setCategoryProduct, setValueRange }) => {
    const { max_price } = useSelector(
        (state: reducersType) => state.filterProduct
    );
    const [dataSizes, setDataSizes] = useState<string[]>([]);
    const [range, setRange] = useState<number[]>([0, 0]);

    useEffect(() => {
        setRange([range[0], (range[1] = max_price)]);
    }, [max_price]);
    return (
        <FilterDisplayStyle>
            <h1>Category</h1>
            <hr />
            <FilterCategory setCategoryProduct={setCategoryProduct} />
            <h1>price by filter</h1>
            <hr />
            <ContainerRangeStyle>
                <SliderRange setValueRange={setRange} valueRange={range} />
                <ContainerFilterPriceStyle>
                    <p>
                        Price:
                        <span>{`$${range[0]}-${range[1]}`}</span>
                    </p>
                    <WSButton
                        backgroundColor="transparent"
                        onClick={() => {
                            setValueRange(range);
                        }}
                    >
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
