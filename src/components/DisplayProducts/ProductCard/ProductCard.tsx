import React, { FC } from "react";
import { ImagesStyle, ProductCardStyle } from "./productCard.style";
import { products } from "../../../types/response.types";

const ProductCard: FC<{ product: products }> = ({ product }) => {
    return (
        <ProductCardStyle>
            <ImagesStyle src={product.path_img[0].url} alt="Image product" />
        </ProductCardStyle>
    );
};

export default ProductCard;
