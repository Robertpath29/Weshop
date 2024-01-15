import React, { FC, useState } from "react";
import { RelatedItemsStyle } from "./relatedItems.style";
import { products } from "../../../types/response.types";
import { ContainerListBasketStyle } from "../../DisplayProducts/ProductCard/productCard.style";
import WSBtnProduct from "../../UI/WSBtnProduct/WSBtnProduct";
import { SlBasket } from "react-icons/sl";

const RelatedItems: FC<{ product: products }> = ({ product }) => {
    const [activeBasket, isActiveBasket] = useState(false);
    return (
        <RelatedItemsStyle
            onMouseMove={() => {
                isActiveBasket(true);
            }}
            onMouseOut={() => {
                isActiveBasket(false);
            }}
        >
            <img
                className="imagesRelatedItems"
                src={product.path_img[0].url}
                alt="product image"
            />
            <ContainerListBasketStyle>
                <WSBtnProduct
                    SvgIcon={SlBasket}
                    active={activeBasket}
                    textAdd="Add to cart"
                    onClick={() => {}}
                />
            </ContainerListBasketStyle>
        </RelatedItemsStyle>
    );
};

export default RelatedItems;
