import React, { FC, useEffect, useState } from "react";
import { CategoryStyle, FilterCategoryStyle } from "./filterCategory.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../../../redux/combineReducer/combineReducer";
import { useLocation, useNavigate } from "react-router-dom";

const FilterCategory: FC<{
    setCategoryProduct: React.Dispatch<React.SetStateAction<string>>;
    setPathHistory: React.Dispatch<
        React.SetStateAction<{
            category: string;
            sort: string;
            keyword: string;
        }>
    >;
    setKeyword: React.Dispatch<React.SetStateAction<string>>;
    pathHistory: {
        category: string;
        sort: string;
        keyword: string;
    };
    setActiveKeyword: React.Dispatch<
        React.SetStateAction<{
            tShirt: boolean;
            black: boolean;
            white: boolean;
            fashion: boolean;
            woman: boolean;
            man: boolean;
        }>
    >;
}> = ({
    setCategoryProduct,
    setPathHistory,
    pathHistory,
    setKeyword,
    setActiveKeyword,
}) => {
    const path = useLocation().pathname;
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
    const routeCategory = useNavigate();

    useEffect(() => {
        const arraySortName = [
            "woman",
            "man",
            "kids",
            "bags",
            "accessories",
            "watch",
        ];
        const sortNameArray = path.split("/", 10);
        const sortName = sortNameArray[2];
        const confirm = arraySortName.includes(sortName);
        if (confirm) {
            setCategoryProduct(sortName);
        } else {
            setCategoryProduct("");
            isCategory({
                ...category,
                woman: false,
                man: false,
                kids: false,
                bags: false,
                accessories: false,
                watch: false,
            });
        }
    }, [path]);
    return (
        <FilterCategoryStyle>
            <CategoryStyle
                $active={category.woman}
                onClick={() => {
                    if (category.woman === true) {
                        setCategoryProduct("");
                        isCategory({ ...category, woman: false });
                        setPathHistory({ ...pathHistory, category: "" });
                        routeCategory(
                            `/shop/${pathHistory.sort && pathHistory.sort}`
                        );
                    } else {
                        setCategoryProduct("woman");
                        setKeyword("");
                        setPathHistory({
                            ...pathHistory,
                            category: "woman",
                            keyword: "",
                        });
                        routeCategory(
                            `/shop/woman${
                                pathHistory.sort && "/" + pathHistory.sort
                            }`
                        );
                        isCategory({
                            ...category,
                            woman: true,
                            man: false,
                            kids: false,
                            bags: false,
                            accessories: false,
                            watch: false,
                        });
                        setActiveKeyword({
                            tShirt: false,
                            black: false,
                            white: false,
                            fashion: false,
                            woman: false,
                            man: false,
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
                        setPathHistory({ ...pathHistory, category: "" });
                        routeCategory(
                            `/shop/${pathHistory.sort && pathHistory.sort}`
                        );
                    } else {
                        setCategoryProduct("man");
                        setKeyword("");
                        setPathHistory({
                            ...pathHistory,
                            category: "man",
                            keyword: "",
                        });
                        routeCategory(
                            `/shop/man${
                                pathHistory.sort && "/" + pathHistory.sort
                            }`
                        );
                        isCategory({
                            ...category,
                            woman: false,
                            man: true,
                            kids: false,
                            bags: false,
                            accessories: false,
                            watch: false,
                        });
                        setActiveKeyword({
                            tShirt: false,
                            black: false,
                            white: false,
                            fashion: false,
                            woman: false,
                            man: false,
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
                        setPathHistory({ ...pathHistory, category: "" });
                        routeCategory(
                            `/shop/${pathHistory.sort && pathHistory.sort}`
                        );
                    } else {
                        setCategoryProduct("kids");
                        setKeyword("");
                        setPathHistory({
                            ...pathHistory,
                            category: "kids",
                            keyword: "",
                        });
                        routeCategory(
                            `/shop/kids${
                                pathHistory.sort && "/" + pathHistory.sort
                            }`
                        );
                        isCategory({
                            ...category,
                            woman: false,
                            man: false,
                            kids: true,
                            bags: false,
                            accessories: false,
                            watch: false,
                        });
                        setActiveKeyword({
                            tShirt: false,
                            black: false,
                            white: false,
                            fashion: false,
                            woman: false,
                            man: false,
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
                        setPathHistory({ ...pathHistory, category: "" });
                        routeCategory(
                            `/shop/${pathHistory.sort && pathHistory.sort}`
                        );
                    } else {
                        setCategoryProduct("bags");
                        setKeyword("");
                        setPathHistory({
                            ...pathHistory,
                            category: "bags",
                            keyword: "",
                        });
                        routeCategory(
                            `/shop/bags${
                                pathHistory.sort && "/" + pathHistory.sort
                            }`
                        );
                        isCategory({
                            ...category,
                            woman: false,
                            man: false,
                            kids: false,
                            bags: true,
                            accessories: false,
                            watch: false,
                        });
                        setActiveKeyword({
                            tShirt: false,
                            black: false,
                            white: false,
                            fashion: false,
                            woman: false,
                            man: false,
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
                        setPathHistory({ ...pathHistory, category: "" });
                        routeCategory(
                            `/shop/${pathHistory.sort && pathHistory.sort}`
                        );
                    } else {
                        setCategoryProduct("accessories");
                        setKeyword("");
                        setPathHistory({
                            ...pathHistory,
                            category: "accessories",
                            keyword: "",
                        });
                        routeCategory(
                            `/shop/accessories${
                                pathHistory.sort && "/" + pathHistory.sort
                            }`
                        );
                        isCategory({
                            ...category,
                            woman: false,
                            man: false,
                            kids: false,
                            bags: false,
                            accessories: true,
                            watch: false,
                        });
                        setActiveKeyword({
                            tShirt: false,
                            black: false,
                            white: false,
                            fashion: false,
                            woman: false,
                            man: false,
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
                        setPathHistory({ ...pathHistory, category: "" });
                        routeCategory(
                            `/shop/${pathHistory.sort && pathHistory.sort}`
                        );
                    } else {
                        setCategoryProduct("watch");
                        setKeyword("");
                        setPathHistory({
                            ...pathHistory,
                            category: "watch",
                            keyword: "",
                        });
                        routeCategory(
                            `/shop/watch${
                                pathHistory.sort && "/" + pathHistory.sort
                            }`
                        );
                        isCategory({
                            ...category,
                            woman: false,
                            man: false,
                            kids: false,
                            bags: false,
                            accessories: false,
                            watch: true,
                        });
                        setActiveKeyword({
                            tShirt: false,
                            black: false,
                            white: false,
                            fashion: false,
                            woman: false,
                            man: false,
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
