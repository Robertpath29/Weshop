import React from "react";
import { SortByStyle } from "./sortBy.style";

const SortBy = () => {
    return (
        <SortByStyle>
            <span>Sort by:</span>
            <select defaultValue="basic" onChange={(e) => {}}>
                <option value="data">Date</option>
                <option value="number">Number</option>
            </select>
        </SortByStyle>
    );
};

export default SortBy;
