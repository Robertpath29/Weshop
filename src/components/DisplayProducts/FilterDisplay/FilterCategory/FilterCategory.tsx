import React, { useState } from "react";
import { CategoryStyle, FilterCategoryStyle } from "./filterCategory.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../../../redux/combineReducer/combineReducer";

const FilterCategory = () => {
    const [category, isCategory] = useState({
        woman: false,
        man: false,
        kids: false,
        bags: false,
        accessories: false,
        watch: false,
    });
    const { categoryCountProduct } = useSelector(
        (state: reducersType) => state.filterProduct
    );
    return (
        <FilterCategoryStyle>
            <CategoryStyle
                $active={category.woman}
                onClick={() => {
                    isCategory({
                        ...category,
                        woman: true,
                        man: false,
                        kids: false,
                        bags: false,
                        accessories: false,
                        watch: false,
                    });
                }}
            >
                Woman
                <span>({categoryCountProduct.woman})</span>
            </CategoryStyle>
            <hr />
            <CategoryStyle
                $active={category.man}
                onClick={() => {
                    isCategory({
                        ...category,
                        woman: false,
                        man: true,
                        kids: false,
                        bags: false,
                        accessories: false,
                        watch: false,
                    });
                }}
            >
                Man
                <span>({categoryCountProduct.man})</span>
            </CategoryStyle>
            <hr />
            <CategoryStyle
                $active={category.kids}
                onClick={() => {
                    isCategory({
                        ...category,
                        woman: false,
                        man: false,
                        kids: true,
                        bags: false,
                        accessories: false,
                        watch: false,
                    });
                }}
            >
                Kids
                <span>({categoryCountProduct.kids})</span>
            </CategoryStyle>
            <hr />
            <CategoryStyle
                $active={category.bags}
                onClick={() => {
                    isCategory({
                        ...category,
                        woman: false,
                        man: false,
                        kids: false,
                        bags: true,
                        accessories: false,
                        watch: false,
                    });
                }}
            >
                Bags
                <span>({categoryCountProduct.bags})</span>
            </CategoryStyle>
            <hr />
            <CategoryStyle
                $active={category.accessories}
                onClick={() => {
                    isCategory({
                        ...category,
                        woman: false,
                        man: false,
                        kids: false,
                        bags: false,
                        accessories: true,
                        watch: false,
                    });
                }}
            >
                Accessories
                <span>({categoryCountProduct.accessories})</span>
            </CategoryStyle>
            <hr />
            <CategoryStyle
                $active={category.watch}
                onClick={() => {
                    isCategory({
                        ...category,
                        woman: false,
                        man: false,
                        kids: false,
                        bags: false,
                        accessories: false,
                        watch: true,
                    });
                }}
            >
                Watch
                <span>({categoryCountProduct.watch})</span>
            </CategoryStyle>
        </FilterCategoryStyle>
    );
};

export default FilterCategory;
