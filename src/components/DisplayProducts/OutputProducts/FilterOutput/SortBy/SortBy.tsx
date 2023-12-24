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
            </select>
        </SortByStyle>
    );
};

export default SortBy;
