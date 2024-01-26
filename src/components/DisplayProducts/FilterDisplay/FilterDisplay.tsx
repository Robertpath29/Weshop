import React, { FC, useEffect, useState } from "react";
import {
    ContainerBestSaleStyle,
    ContainerBtnKeyword,
    ContainerFilterPriceStyle,
    ContainerKeywordStyle,
    ContainerRangeStyle,
    FilterDisplayStyle,
} from "./filterDisplay.style";
import SliderRange from "../../UI/SliderRange/SliderRange";
import WSButton from "../../UI/WSButton/WSButton";
import FilterCheckBox from "./FilterRadio/FilterRadio";
import FilterCategory from "./FilterCategory/FilterCategory";
import { useSelector } from "react-redux";
import { reducersType } from "../../../redux/combineReducer/combineReducer";
import Loading from "../../Loading/Loading";
import BestSaleCard from "./BestSaleCard/BestSaleCard";
import { useNavigate } from "react-router-dom";

const FilterDisplay: FC<{
    setCategoryProduct: React.Dispatch<React.SetStateAction<string>>;
    setValueRange: React.Dispatch<React.SetStateAction<number[]>>;
    setDataSizes: React.Dispatch<React.SetStateAction<string>>;
    setKeyword: React.Dispatch<React.SetStateAction<string>>;
    setPathHistory: React.Dispatch<
        React.SetStateAction<{
            category: string;
            sort: string;
            keyword: string;
        }>
    >;
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
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    activeKeyword: {
        tShirt: boolean;
        black: boolean;
        white: boolean;
        fashion: boolean;
        woman: boolean;
        man: boolean;
    };
    pathHistory: {
        category: string;
        sort: string;
        keyword: string;
    };
    dataSizes: string;
    keyword: string;
}> = ({
    setCategoryProduct,
    setValueRange,
    dataSizes,
    setDataSizes,
    setKeyword,
    keyword,
    setPathHistory,
    pathHistory,
    activeKeyword,
    setActiveKeyword,
    setCurrentPage,
}) => {
    const { max_price, best_sale } = useSelector(
        (state: reducersType) => state.filterProduct
    );
    const [range, setRange] = useState<number[]>([0, 0]);
    const routeKeyword = useNavigate();
    useEffect(() => {
        setRange([range[0], (range[1] = max_price)]);
    }, [max_price]);
    return (
        <FilterDisplayStyle>
            <h1>Category</h1>
            <hr />
            <FilterCategory
                setCurrentPage={setCurrentPage}
                setActiveKeyword={setActiveKeyword}
                pathHistory={pathHistory}
                setCategoryProduct={setCategoryProduct}
                setPathHistory={setPathHistory}
                setKeyword={setKeyword}
            />
            <h1>price by filter</h1>
            <hr />
            <ContainerRangeStyle>
                <SliderRange setValueRange={setRange} valueRange={range} />
                <ContainerFilterPriceStyle>
                    <p>
                        Price:
                        <span>{`$${range[0]}-${range[1]}`}</span>
                    </p>
                    <WSButton
                        backgroundColor="transparent"
                        onClick={() => {
                            setValueRange(range);
                        }}
                    >
                        Filter
                    </WSButton>
                </ContainerFilterPriceStyle>
            </ContainerRangeStyle>
            <h1>Size</h1>
            <hr />
            <FilterCheckBox dataSizes={dataSizes} setDataSizes={setDataSizes} />
            <h1>best sale</h1>
            <hr />
            <ContainerBestSaleStyle>
                {best_sale ? (
                    best_sale.map((product, index) => {
                        if (index > 1) return;
                        return (
                            <BestSaleCard
                                product={product}
                                key={product.product.id}
                            />
                        );
                    })
                ) : (
                    <Loading />
                )}
            </ContainerBestSaleStyle>
            <h1>keyword</h1>
            <hr />
            <ContainerKeywordStyle>
                <ContainerBtnKeyword $active={activeKeyword.tShirt}>
                    <WSButton
                        onClick={() => {
                            if (keyword === "T-shirt") {
                                setKeyword("");
                                setActiveKeyword({
                                    tShirt: false,
                                    black: false,
                                    white: false,
                                    fashion: false,
                                    woman: false,
                                    man: false,
                                });
                                setPathHistory({
                                    category: "",
                                    sort: "",
                                    keyword: "",
                                });
                                routeKeyword(`/shop`);
                            } else {
                                setKeyword("T-shirt");
                                setPathHistory({
                                    category: "",
                                    sort: "",
                                    keyword: "t-shirt",
                                });
                                routeKeyword(`/shop/t-shirt`);
                                setActiveKeyword({
                                    tShirt: true,
                                    black: false,
                                    white: false,
                                    fashion: false,
                                    woman: false,
                                    man: false,
                                });
                            }
                        }}
                    >
                        T-shirt
                    </WSButton>
                </ContainerBtnKeyword>
                <ContainerBtnKeyword $active={activeKeyword.black}>
                    <WSButton
                        onClick={() => {
                            if (keyword === "Black") {
                                setPathHistory({
                                    category: "",
                                    sort: "",
                                    keyword: "",
                                });
                                routeKeyword(`/shop`);
                                setKeyword("");
                                setActiveKeyword({
                                    tShirt: false,
                                    black: false,
                                    white: false,
                                    fashion: false,
                                    woman: false,
                                    man: false,
                                });
                            } else {
                                setKeyword("Black");
                                setPathHistory({
                                    category: "",
                                    sort: "",
                                    keyword: "black",
                                });
                                routeKeyword(`/shop/black`);
                                setActiveKeyword({
                                    tShirt: false,
                                    black: true,
                                    white: false,
                                    fashion: false,
                                    woman: false,
                                    man: false,
                                });
                            }
                        }}
                    >
                        Black
                    </WSButton>
                </ContainerBtnKeyword>
                <ContainerBtnKeyword $active={activeKeyword.white}>
                    <WSButton
                        onClick={() => {
                            if (keyword === "White") {
                                setPathHistory({
                                    category: "",
                                    sort: "",
                                    keyword: "",
                                });
                                routeKeyword(`/shop`);
                                setKeyword("");
                                setActiveKeyword({
                                    tShirt: false,
                                    black: false,
                                    white: false,
                                    fashion: false,
                                    woman: false,
                                    man: false,
                                });
                            } else {
                                setKeyword("White");
                                setPathHistory({
                                    category: "",
                                    sort: "",
                                    keyword: "white",
                                });
                                routeKeyword(`/shop/white`);
                                setActiveKeyword({
                                    tShirt: false,
                                    black: false,
                                    white: true,
                                    fashion: false,
                                    woman: false,
                                    man: false,
                                });
                            }
                        }}
                    >
                        White
                    </WSButton>
                </ContainerBtnKeyword>
                <ContainerBtnKeyword $active={activeKeyword.fashion}>
                    <WSButton
                        onClick={() => {
                            if (keyword === "Fashion") {
                                setPathHistory({
                                    category: "",
                                    sort: "",
                                    keyword: "",
                                });
                                routeKeyword(`/shop`);
                                setKeyword("");
                                setActiveKeyword({
                                    tShirt: false,
                                    black: false,
                                    white: false,
                                    fashion: false,
                                    woman: false,
                                    man: false,
                                });
                            } else {
                                setKeyword("Fashion");
                                setPathHistory({
                                    category: "",
                                    sort: "",
                                    keyword: "fashion",
                                });
                                routeKeyword(`/shop/fashion`);
                                setActiveKeyword({
                                    tShirt: false,
                                    black: false,
                                    white: false,
                                    fashion: true,
                                    woman: false,
                                    man: false,
                                });
                            }
                        }}
                    >
                        Fashion
                    </WSButton>
                </ContainerBtnKeyword>
                <ContainerBtnKeyword $active={activeKeyword.woman}>
                    <WSButton
                        onClick={() => {
                            if (keyword === "Woman") {
                                setPathHistory({
                                    category: "",
                                    sort: "",
                                    keyword: "",
                                });
                                routeKeyword(`/shop`);
                                setKeyword("");
                                setActiveKeyword({
                                    tShirt: false,
                                    black: false,
                                    white: false,
                                    fashion: false,
                                    woman: false,
                                    man: false,
                                });
                            } else {
                                setKeyword("Woman");
                                setPathHistory({
                                    category: "",
                                    sort: "",
                                    keyword: "woman",
                                });
                                routeKeyword(`/shop/woman`);
                                setActiveKeyword({
                                    tShirt: false,
                                    black: false,
                                    white: false,
                                    fashion: false,
                                    woman: true,
                                    man: false,
                                });
                            }
                        }}
                    >
                        Woman
                    </WSButton>
                </ContainerBtnKeyword>
                <ContainerBtnKeyword $active={activeKeyword.man}>
                    <WSButton
                        onClick={() => {
                            if (keyword === "Man") {
                                setKeyword("");
                                setPathHistory({
                                    category: "",
                                    sort: "",
                                    keyword: "",
                                });
                                routeKeyword(`/shop`);
                                setActiveKeyword({
                                    tShirt: false,
                                    black: false,
                                    white: false,
                                    fashion: false,
                                    woman: false,
                                    man: false,
                                });
                            } else {
                                setKeyword("Man");
                                setPathHistory({
                                    category: "",
                                    sort: "",
                                    keyword: "man",
                                });
                                routeKeyword(`/shop/man`);
                                setActiveKeyword({
                                    tShirt: false,
                                    black: false,
                                    white: false,
                                    fashion: false,
                                    woman: false,
                                    man: true,
                                });
                            }
                        }}
                    >
                        Man
                    </WSButton>
                </ContainerBtnKeyword>
            </ContainerKeywordStyle>
        </FilterDisplayStyle>
    );
};

export default FilterDisplay;
