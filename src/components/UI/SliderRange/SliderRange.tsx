import React, { FC, useState } from "react";
import { SliderRangeStyle } from "./sliderRange.style";
import "rc-slider/assets/index.css";
const SliderRange: FC<{
    maxValue: number;
    valueRange: number[];
    setValueRange: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({ maxValue, setValueRange, valueRange }) => {
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
            max={maxValue}
            range
            allowCross={false}
            value={valueRange}
            onChange={changeSliderValue}
        />
    );
};

export default SliderRange;
