import React, { FC, useEffect, useRef, useState } from "react";
import {
    BasketProductStyle,
    ContainerBasketBtnStyle,
    ContainerBasketProductStyle,
} from "./basketProduct.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../../redux/combineReducer/combineReducer";
import Product from "./Product/Product";
import WSButton from "../../UI/WSButton/WSButton";

const BasketProduct: FC<{
    activeBasket: boolean;
    isActiveBasket: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ activeBasket, isActiveBasket }) => {
    const basketProducts = useSelector(
        (state: reducersType) => state.basketReducer
    );
    const basketProductRef = useRef<HTMLDivElement>(null);
    const [maxCount, isMaxCount] = useState(false);
    useEffect(() => {
        if (basketProducts.basketProduct.length > 3) isMaxCount(true);
        if (basketProductRef.current) {
            const contentHeight = basketProductRef.current.scrollHeight;

            basketProductRef.current.style.height = activeBasket
                ? `${contentHeight}px`
                : "0";
        }
    }, [activeBasket]);

    return (
        <BasketProductStyle
            $activeBasket={activeBasket}
            ref={basketProductRef}
            onMouseOver={() => {
                isActiveBasket(true);
            }}
            onMouseOut={() => {
                isActiveBasket(false);
            }}
        >
            <ContainerBasketProductStyle $maxCount={maxCount}>
                {basketProducts.basketProduct.map((product) => (
                    <Product product={product} key={product.product.id} />
                ))}
            </ContainerBasketProductStyle>
            <ContainerBasketBtnStyle>
                <WSButton maxWidth="100%" onClick={() => {}}>
                    CONTINUE SHOPPING
                </WSButton>
                <WSButton maxWidth="100%" onClick={() => {}}>
                    PROCEED TO CHECKOUT
                </WSButton>
            </ContainerBasketBtnStyle>
        </BasketProductStyle>
    );
};
export default BasketProduct;
