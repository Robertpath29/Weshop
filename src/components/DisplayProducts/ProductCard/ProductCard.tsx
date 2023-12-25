import React, { FC } from "react";
import {
    ContainerBlockStyle,
    ContainerImageStyle,
    ContainerInfoStyle,
    ContainerListStyle,
    ImagesStyle,
    ProductCardStyle,
} from "./productCard.style";
import { products } from "../../../types/response.types";

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
                        <span>${product.product.price}</span>
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
