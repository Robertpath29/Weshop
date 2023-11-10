import React from "react";
import { BasketStyle, ContainerIcon } from "./basket.style";
import { PiHandbag } from "react-icons/pi";

const Basket = () => {
    return (
        <BasketStyle>
            <ContainerIcon>
                <PiHandbag />
            </ContainerIcon>
            <span>$25.00</span>
        </BasketStyle>
    );
};

export default Basket;
