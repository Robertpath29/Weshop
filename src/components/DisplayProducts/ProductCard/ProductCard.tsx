import React, { FC } from "react";
import {
    ContainerBlockStyle,
    ContainerImageStyle,
    ContainerInfoStyle,
    ContainerListStyle,
    ContainerPrice,
    ImagesStyle,
    OldPriceStyle,
    PriceStyle,
    ProductCardStyle,
} from "./productCard.style";
import { products } from "../../../types/response.types";
import { formatPrice } from "../../../utils/formatPrice";

const ProductCard: FC<{
    product: products;
    productDisplay: string;
}> = ({ product, productDisplay }) => {
    return (
        <ProductCardStyle $prodDisplay={productDisplay}>
            {productDisplay === "block" ? (
                <ContainerBlockStyle>
                    <ImagesStyle
                        src={product.path_img[0].url}
                        alt="Image product"
                    />
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
                        <hr />
                        <p>{product.product.description}</p>
                    </ContainerInfoStyle>
                </ContainerListStyle>
            )}
            {productDisplay === "list" && <hr />}
        </ProductCardStyle>
    );
};

export default ProductCard;
