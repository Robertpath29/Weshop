import React, { FC } from "react";
import { ColorStyle, FilterColorStyle } from "./filterColor.style";

const FilterColor: FC<{
    setColor: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setColor }) => {
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
                <ColorStyle
                    key={color}
                    $color={color}
                    onClick={() => {
                        setColor(color);
                    }}
                />
            ))}
        </FilterColorStyle>
    );
};

export default FilterColor;
