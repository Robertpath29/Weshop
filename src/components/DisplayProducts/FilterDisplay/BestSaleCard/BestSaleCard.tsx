import React, { FC } from "react";
import {
    BestSaleCardStyle,
    ContainerBestSale,
    ContainerImageStyle,
    ContainerInfoStyle,
} from "./bestSaleCard.style";
import { products } from "../../../../types/response.types";
import {
    ContainerPrice,
    OldPriceStyle,
    PriceStyle,
} from "../../ProductCard/productCard.style";
import { formatPrice } from "../../../../utils/formatPrice";
import StarsRating from "../../../StarsRating/StarsRating";
import { useNavigate } from "react-router-dom";

const BestSaleCard: FC<{ product: products }> = ({ product }) => {
    const routeProduct = useNavigate();
    return (
        <BestSaleCardStyle>
            <ContainerBestSale>
                <ContainerImageStyle>
                    <img
                        onClick={() => {
                            routeProduct(
                                `/shop/${product.product.category}/${product.product.type_of_clothing}/${product.product.title}/${product.product.id}`
                            );
                        }}
                        src={product.path_img[0].url}
                        alt="Image product"
                    />
                </ContainerImageStyle>
                <ContainerInfoStyle>
                    <h1
                        onClick={() => {
                            routeProduct(
                                `/shop/${product.product.category}/${product.product.type_of_clothing}/${product.product.title}/${product.product.id}`
                            );
                        }}
                    >
                        {product.product.title}
                    </h1>
                    {product.product.number_all_stars !== 0 && (
                        <StarsRating
                            imageStar="/images/StarSVG.svg"
                            changeRating={false}
                            product={product.product}
                        />
                    )}
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
                </ContainerInfoStyle>
            </ContainerBestSale>
            <hr />
        </BestSaleCardStyle>
    );
};

export default BestSaleCard;
