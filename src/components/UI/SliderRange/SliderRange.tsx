import React, { FC, useState } from "react";
import { SliderRangeStyle } from "./sliderRange.style";
import "rc-slider/assets/index.css";
import { useSelector } from "react-redux";
import { reducersType } from "../../../redux/combineReducer/combineReducer";
const SliderRange: FC<{
    valueRange: number[];
    setValueRange: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({ setValueRange, valueRange }) => {
    const { max_price } = useSelector(
        (state: reducersType) => state.filterProduct
    );
    const changeSliderValue = (newValue: number | number[]) => {
        if (typeof newValue === "number") {
            setValueRange([newValue, valueRange[1]]);
        } else {
            setValueRange(newValue);
        }
    };

    return (
        <SliderRangeStyle
            min={0}
            max={max_price}
            range
            allowCross={false}
            value={valueRange}
            onChange={changeSliderValue}
        />
    );
};

export default SliderRange;
