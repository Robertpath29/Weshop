import React, { FC, useState } from "react";
import {
    ContainerInfoNewsletterProductStyle,
    ContainerNewsletterProductStyle,
    NewsletterProductStyle,
} from "./newsletterProduct.style";
import { products } from "../../../types/response.types";
import { ContainerPrice } from "../../DisplayProducts/ProductCard/productCard.style";
import {
    OldPriceStyle,
    PriceStyle,
} from "../../ProductCardDetails/productCardDetails.style";
import { formatPrice } from "../../../utils/formatPrice";
import WSBtnProduct from "../../UI/WSBtnProduct/WSBtnProduct";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import {
    ContainerBtnBasketStyle,
    ContainerBtnFavoritesStyle,
    ContainerBtnStyle,
} from "../newsletter.style";
import { useNavigate } from "react-router-dom";

const NewsletterProduct: FC<{
    product: products;
    index: number;
    reverse?: boolean;
}> = ({ product, index, reverse }) => {
    const [activeBasket, isActiveBasket] = useState(false);
    const [activeFavorites, isActiveFavorites] = useState(false);
    const routeProduct = useNavigate();
    return (
        <NewsletterProductStyle>
            <ContainerNewsletterProductStyle $reverse={reverse}>
                <img
                    onClick={() => {
                        routeProduct(
                            `/shop/${product.product.category}/${product.product.type_of_clothing}/${product.product.title}/${product.product.id}`
                        );
                    }}
                    src={
                        product.path_img[3]
                            ? product.path_img[3].url
                            : product.path_img[1].url
                    }
                    alt="product images"
                />
                <ContainerInfoNewsletterProductStyle $reverse={reverse}>
                    <h1
                        onClick={() => {
                            routeProduct(
                                `/shop/${product.product.category}/${product.product.type_of_clothing}/${product.product.title}/${product.product.id}`
                            );
                        }}
                    >
                        {product.product.title}
                    </h1>
                    <ContainerPrice>
                        {product.product.old_price && (
                            <OldPriceStyle>
                                ${formatPrice(product.product.old_price)}
                            </OldPriceStyle>
                        )}
                        {product.product.old_price && (
                            <span>&nbsp;-&nbsp;</span>
                        )}
                        <PriceStyle>
                            ${formatPrice(product.product.price)}
                        </PriceStyle>
                    </ContainerPrice>
                    <ContainerBtnStyle>
                        <ContainerBtnBasketStyle
                            onMouseMove={() => {
                                isActiveBasket(true);
                            }}
                            onMouseOut={() => {
                                isActiveBasket(false);
                            }}
                        >
                            <WSBtnProduct
                                SvgIcon={SlBasket}
                                active={activeBasket}
                                textAdd="Add to cart"
                                onClick={() => {}}
                            />
                        </ContainerBtnBasketStyle>
                        <ContainerBtnFavoritesStyle
                            onMouseMove={() => {
                                isActiveFavorites(true);
                            }}
                            onMouseOut={() => {
                                isActiveFavorites(false);
                            }}
                        >
                            <WSBtnProduct
                                SvgIcon={FaRegHeart}
                                active={activeFavorites}
                                textAdd="Add to favorites"
                                right
                                onClick={() => {}}
                            />
                        </ContainerBtnFavoritesStyle>
                    </ContainerBtnStyle>
                </ContainerInfoNewsletterProductStyle>
            </ContainerNewsletterProductStyle>
            {index < 2 && <hr />}
        </NewsletterProductStyle>
    );
};

export default NewsletterProduct;
