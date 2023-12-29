import React, { FC, useState } from "react";
import {
    ContainerBlockBasketStyle,
    ContainerBlockFavoritesStyle,
    ContainerBlockStyle,
    ContainerBlockViewStyle,
    ContainerGroupBtnStyle,
    ContainerImageStyle,
    ContainerInfoStyle,
    ContainerListBasketStyle,
    ContainerListFavoritesStyle,
    ContainerListStyle,
    ContainerListViewStyle,
    ContainerPrice,
    ContainerStarsStyle,
    ImagesStyle,
    NumberRatingStyle,
    OldPriceStyle,
    PriceStyle,
    ProductCardStyle,
} from "./productCard.style";
import { products } from "../../../types/response.types";
import { formatPrice } from "../../../utils/formatPrice";
import { SlBasket } from "react-icons/sl";
import WSBtnProduct from "../../UI/WSBtnProduct/WSBtnProduct";
import { FaRegHeart } from "react-icons/fa";
import { ContainerPriceStyle } from "../../UI/WSBtnProduct/wSBtnProduct.style";
import { LiaEye } from "react-icons/lia";
import StarsRating from "../../StarsRating/StarsRating";

const ProductCard: FC<{
    product: products;
    productDisplay: string;
}> = ({ product, productDisplay }) => {
    const [activeBasket, isActiveBasket] = useState(false);
    const [activeFavorites, isActiveFavorites] = useState(false);
    const [activeView, isActiveView] = useState(false);
    const [numberRating, setNumberRating] = useState("");

    const [activeStars, isActiveStars] = useState(true);
    return (
        <ProductCardStyle
            $prodDisplay={productDisplay}
            onMouseMove={() => {
                isActiveBasket(true);
            }}
            onMouseOut={() => {
                isActiveBasket(false);
            }}
        >
            {productDisplay === "block" ? (
                <ContainerBlockStyle>
                    <ContainerPriceStyle>
                        <span>${formatPrice(product.product.price)}</span>
                    </ContainerPriceStyle>
                    <ImagesStyle
                        src={product.path_img[0].url}
                        alt="Image product"
                    />
                    <ContainerBlockViewStyle
                        onMouseMove={() => {
                            isActiveView(true);
                        }}
                        onMouseOut={() => {
                            isActiveView(false);
                        }}
                    >
                        <WSBtnProduct
                            SvgIcon={LiaEye}
                            active={activeView}
                            textAdd={"View " + product.product.type_of_clothing}
                            onClick={() => {}}
                        />
                    </ContainerBlockViewStyle>
                    <ContainerBlockFavoritesStyle
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
                            onClick={() => {}}
                        />
                    </ContainerBlockFavoritesStyle>
                    <ContainerBlockBasketStyle>
                        <WSBtnProduct
                            SvgIcon={SlBasket}
                            active={activeBasket}
                            textAdd="Add to cart"
                            onClick={() => {}}
                        />
                    </ContainerBlockBasketStyle>
                </ContainerBlockStyle>
            ) : (
                <ContainerListStyle>
                    <ContainerImageStyle>
                        <ImagesStyle
                            src={product.path_img[0].url}
                            alt="Image product"
                        />
                    </ContainerImageStyle>
                    <ContainerInfoStyle>
                        <h1>{product.product.title}</h1>
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
                        <ContainerStarsStyle>
                            <h1>
                                Availability: <span>IN STOCK</span>
                            </h1>
                            <hr />
                            <StarsRating
                                changeRating={false}
                                setNumberRating={setNumberRating}
                                product={product}
                            />
                            <NumberRatingStyle>
                                {numberRating}
                            </NumberRatingStyle>
                        </ContainerStarsStyle>
                        <hr />
                        <p>{product.product.description}</p>
                        <ContainerGroupBtnStyle>
                            <ContainerListFavoritesStyle
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
                                    onClick={() => {}}
                                />
                            </ContainerListFavoritesStyle>
                            <ContainerListViewStyle
                                onMouseMove={() => {
                                    isActiveView(true);
                                }}
                                onMouseOut={() => {
                                    isActiveView(false);
                                }}
                            >
                                <WSBtnProduct
                                    SvgIcon={LiaEye}
                                    active={activeView}
                                    textAdd={
                                        "View " +
                                        product.product.type_of_clothing
                                    }
                                    onClick={() => {}}
                                />
                            </ContainerListViewStyle>
                            <ContainerListBasketStyle>
                                <WSBtnProduct
                                    SvgIcon={SlBasket}
                                    active={true}
                                    textAdd="Add to cart"
                                    onClick={() => {}}
                                />
                            </ContainerListBasketStyle>
                        </ContainerGroupBtnStyle>
                    </ContainerInfoStyle>
                </ContainerListStyle>
            )}
            {productDisplay === "list" && <hr />}
        </ProductCardStyle>
    );
};

export default ProductCard;
