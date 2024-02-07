import React, { useEffect, useState } from "react";
import {
    BasketStyle,
    BtnBasketStyle,
    ContainerIcon,
    NumberCountBasketStyle,
} from "./basket.style";
import { PiHandbag } from "react-icons/pi";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducer/combineReducer";
import BasketProduct from "./BasketProduct/BasketProduct";
import { formatPrice } from "../../utils/formatPrice";

const Basket = () => {
    const basketProducts = useSelector(
        (state: reducersType) => state.basketReducer
    );
    const [activeBasket, isActiveBasket] = useState(false);
    const [allPrice, setAllPrice] = useState("00.00");

    useEffect(() => {
        let value = 0;
        basketProducts.basketProduct.forEach(
            (product) => (value += Number(product.product.price))
        );
        setAllPrice(String(value));
    }, [basketProducts]);
    return (
        <BasketStyle>
            <BtnBasketStyle
                $isProduct={basketProducts.basketProduct.length > 0}
                onMouseOver={() => {
                    isActiveBasket(true);
                }}
                onMouseOut={() => {
                    isActiveBasket(false);
                }}
            >
                <ContainerIcon>
                    <PiHandbag />
                    {basketProducts.basketProduct.length !== 0 && (
                        <NumberCountBasketStyle>
                            {basketProducts.basketProduct.length}
                        </NumberCountBasketStyle>
                    )}
                </ContainerIcon>
                <span>${formatPrice(allPrice)}</span>
            </BtnBasketStyle>
            {basketProducts.basketProduct.length !== 0 && (
                <BasketProduct
                    activeBasket={activeBasket}
                    isActiveBasket={isActiveBasket}
                />
            )}
        </BasketStyle>
    );
};

export default Basket;
