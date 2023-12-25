import React, { FC, useState } from "react";
import { CategoryStyle, FilterCategoryStyle } from "./filterCategory.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../../../redux/combineReducer/combineReducer";

const FilterCategory: FC<{
    setCategoryProduct: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setCategoryProduct }) => {
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
                    if (category.woman === true) {
                        setCategoryProduct("");
                        isCategory({ ...category, woman: false });
                    } else {
                        setCategoryProduct("woman");
                        isCategory({
                            ...category,
                            woman: true,
                            man: false,
                            kids: false,
                            bags: false,
                            accessories: false,
                            watch: false,
                        });
                    }
                }}
            >
                Woman
                <span>({categoryCountProduct.woman})</span>
            </CategoryStyle>
            <hr />
            <CategoryStyle
                $active={category.man}
                onClick={() => {
                    if (category.man === true) {
                        setCategoryProduct("");
                        isCategory({ ...category, man: false });
                    } else {
                        setCategoryProduct("man");
                        isCategory({
                            ...category,
                            woman: false,
                            man: true,
                            kids: false,
                            bags: false,
                            accessories: false,
                            watch: false,
                        });
                    }
                }}
            >
                Man
                <span>({categoryCountProduct.man})</span>
            </CategoryStyle>
            <hr />
            <CategoryStyle
                $active={category.kids}
                onClick={() => {
                    if (category.kids === true) {
                        setCategoryProduct("");
                        isCategory({ ...category, kids: false });
                    } else {
                        setCategoryProduct("kids");
                        isCategory({
                            ...category,
                            woman: false,
                            man: false,
                            kids: true,
                            bags: false,
                            accessories: false,
                            watch: false,
                        });
                    }
                }}
            >
                Kids
                <span>({categoryCountProduct.kids})</span>
            </CategoryStyle>
            <hr />
            <CategoryStyle
                $active={category.bags}
                onClick={() => {
                    if (category.bags === true) {
                        setCategoryProduct("");
                        isCategory({ ...category, bags: false });
                    } else {
                        setCategoryProduct("bags");
                        isCategory({
                            ...category,
                            woman: false,
                            man: false,
                            kids: false,
                            bags: true,
                            accessories: false,
                            watch: false,
                        });
                    }
                }}
            >
                Bags
                <span>({categoryCountProduct.bags})</span>
            </CategoryStyle>
            <hr />
            <CategoryStyle
                $active={category.accessories}
                onClick={() => {
                    if (category.accessories === true) {
                        setCategoryProduct("");
                        isCategory({ ...category, accessories: false });
                    } else {
                        setCategoryProduct("accessories");
                        isCategory({
                            ...category,
                            woman: false,
                            man: false,
                            kids: false,
                            bags: false,
                            accessories: true,
                            watch: false,
                        });
                    }
                }}
            >
                Accessories
                <span>({categoryCountProduct.accessories})</span>
            </CategoryStyle>
            <hr />
            <CategoryStyle
                $active={category.watch}
                onClick={() => {
                    if (category.watch === true) {
                        setCategoryProduct("");
                        isCategory({ ...category, watch: false });
                    } else {
                        setCategoryProduct("watch");
                        isCategory({
                            ...category,
                            woman: false,
                            man: false,
                            kids: false,
                            bags: false,
                            accessories: false,
                            watch: true,
                        });
                    }
                }}
            >
                Watch
                <span>({categoryCountProduct.watch})</span>
            </CategoryStyle>
        </FilterCategoryStyle>
    );
};

export default FilterCategory;
