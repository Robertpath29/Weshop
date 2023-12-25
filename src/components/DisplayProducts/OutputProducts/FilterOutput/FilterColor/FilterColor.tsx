import React, { FC, useState } from "react";
import { ColorStyle, FilterColorStyle } from "./filterColor.style";

const FilterColor: FC<{
    setColor: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setColor }) => {
    const [active, isActive] = useState<string>("");
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
                    $active={active === color}
                    onClick={() => {
                        if (active === color) {
                            isActive("");
                            setColor("");
                        } else {
                            setColor(color);
                            isActive(color);
                        }
                    }}
                />
            ))}
        </FilterColorStyle>
    );
};

export default FilterColor;
