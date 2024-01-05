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

const BestSaleCard: FC<{ product: products }> = ({ product }) => {
    return (
        <BestSaleCardStyle>
            <ContainerBestSale>
                <ContainerImageStyle>
                    <img src={product.path_img[0].url} alt="Image product" />
                </ContainerImageStyle>
                <ContainerInfoStyle>
                    <h1>{product.product.title}</h1>
                    <StarsRating
                        imageStar="/images/StarSVG.svg"
                        changeRating={false}
                        product={product.product}
                    />
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
