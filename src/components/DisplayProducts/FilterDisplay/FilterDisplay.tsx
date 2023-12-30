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

const FilterDisplay: FC<{
    setCategoryProduct: React.Dispatch<React.SetStateAction<string>>;
    setValueRange: React.Dispatch<React.SetStateAction<number[]>>;
    setDataSizes: React.Dispatch<React.SetStateAction<string>>;
    setKeyword: React.Dispatch<React.SetStateAction<string>>;
    setPathHistory: React.Dispatch<
        React.SetStateAction<{
            category: string;
            sort: string;
        }>
    >;
    pathHistory: {
        category: string;
        sort: string;
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
}) => {
    const [activeKeyword, setActiveKeyword] = useState({
        tShirt: false,
        black: false,
        white: false,
        fashion: false,
        woman: false,
        man: false,
    });
    const { max_price, best_sale } = useSelector(
        (state: reducersType) => state.filterProduct
    );
    const [range, setRange] = useState<number[]>([0, 0]);

    useEffect(() => {
        setRange([range[0], (range[1] = max_price)]);
    }, [max_price]);
    return (
        <FilterDisplayStyle>
            <h1>Category</h1>
            <hr />
            <FilterCategory
                pathHistory={pathHistory}
                setCategoryProduct={setCategoryProduct}
                setPathHistory={setPathHistory}
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
                    best_sale.map((product) => (
                        <BestSaleCard
                            product={product}
                            key={product.product.id}
                        />
                    ))
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
                            } else {
                                setKeyword("T-shirt");
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
