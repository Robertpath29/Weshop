import React from "react";
import { FilterCategoryStyle } from "./filterCategory.style";

const FilterCategory = () => {
    return (
        <FilterCategoryStyle>
            <li>
                Woman
                <span>(0)</span>
            </li>
            <hr />
            <li>
                Man
                <span>(0)</span>
            </li>
            <hr />
            <li>
                Kids
                <span>(0)</span>
            </li>
            <hr />
            <li>
                Bags
                <span>(0)</span>
            </li>
            <hr />
            <li>
                Accessories
                <span>(0)</span>
            </li>
            <hr />
            <li>
                Watch
                <span>(0)</span>
            </li>
        </FilterCategoryStyle>
    );
};

export default FilterCategory;
