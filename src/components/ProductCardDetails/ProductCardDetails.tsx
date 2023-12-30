import React, { FC } from "react";
import {
    ContainerImagesStyle,
    ContainerInfoStyle,
    ContainerProductCardDetailsStyle,
    ProductCardDetailsStyle,
} from "./productCardDetails.style";

import CarouselProductDetails from "../CarouselProductDetails/CarouselProductDetails";
import { path_img, product } from "../../types/response.types";

const ProductCardDetails: FC<{
    product: product;
    images: path_img[];
}> = ({ images, product }) => {
    return (
        <ProductCardDetailsStyle>
            <ContainerProductCardDetailsStyle>
                <ContainerImagesStyle>
                    <CarouselProductDetails images={images} />
                </ContainerImagesStyle>
                <ContainerInfoStyle></ContainerInfoStyle>
            </ContainerProductCardDetailsStyle>
        </ProductCardDetailsStyle>
    );
};

export default ProductCardDetails;
