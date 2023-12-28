import React, { FC } from "react";
import { SortByStyle } from "./sortBy.style";

const SortBy: FC<{
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setSortBy }) => {
    return (
        <SortByStyle>
            <span>Sort by:</span>
            <select
                defaultValue="basic"
                onChange={(e) => {
                    setSortBy(e.target.value);
                }}
            >
                <option value="data">Date</option>
                <option value="t-shirt">T-shirt</option>
                <option value="cap">Cap</option>
                <option value="jeans">Jeans</option>
                <option value="coat">Coat</option>
                <option value="shirt">Shirt</option>
                <option value="hoodies">Hoodies</option>
                <option value="sunglasses">Sunglasses</option>
            </select>
        </SortByStyle>
    );
};

export default SortBy;
