import React from "react";
import {
    BlockLifeBorderStyle,
    BlockLifestyle,
    BlockProductsStyle,
    BlockShopStyle,
    MensTShirtLifestyleStyle,
    ProductStyle,
    ShopHiddenStyle,
    ShopTopBorderStyle,
} from "./MensTShirtLifestyle.style";
import { GoArrowRight } from "react-icons/go";
import WSButton from "../UI/WSButton/WSButton";

const MensTShirtLifestyle = () => {
    return (
        <MensTShirtLifestyleStyle>
            <BlockShopStyle>
                <ShopHiddenStyle />
                <ShopTopBorderStyle />
                <WSButton
                    border={2}
                    backgroundColor="transparent"
                    color="#000000"
                    upper
                    onClick={() => {}}
                >
                    shop now
                </WSButton>
            </BlockShopStyle>
            <BlockProductsStyle>
                <ProductStyle></ProductStyle>
                <ProductStyle></ProductStyle>
            </BlockProductsStyle>
            <BlockLifestyle>
                <BlockLifeBorderStyle>
                    <h1>MENS/LIFESTYLE</h1>
                    <GoArrowRight />
                </BlockLifeBorderStyle>
            </BlockLifestyle>
        </MensTShirtLifestyleStyle>
    );
};

export default MensTShirtLifestyle;
