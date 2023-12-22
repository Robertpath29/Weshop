import React from "react";
import { ColorStyle, FilterColorStyle } from "./filterColor.style";

const FilterColor = () => {
    const arrayColor = [
        "red",
        "green",
        "skyblue",
        "blue",
        "yellow",
        "orange",
        "purple",
        "black",
        "white",
    ];
    return (
        <FilterColorStyle>
            {arrayColor.map((color) => (
                <ColorStyle $color={color} />
            ))}
        </FilterColorStyle>
    );
};

export default FilterColor;
