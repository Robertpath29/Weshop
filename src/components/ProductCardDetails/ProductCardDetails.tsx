import React, { FC, useState } from "react";
import {
    ContainerImagesStyle,
    ContainerInfoStyle,
    ContainerInputStyle,
    ContainerProductCardDetailsStyle,
    ContainerReviewStyle,
    ContainerStarsStyle,
    NumberRatingStyle,
    OldPriceStyle,
    PriceContainerStyle,
    PriceStyle,
    ProductCardDetailsStyle,
    ReviewStyle,
} from "./productCardDetails.style";

import CarouselProductDetails from "../CarouselProductDetails/CarouselProductDetails";
import { path_img, product } from "../../types/response.types";
import { formatPrice } from "../../utils/formatPrice";
import StarsRating from "../StarsRating/StarsRating";
import WSButtonCountProducts from "../UI/WSButtonCountProducts/WSButtonCountProducts";
import WSSelect from "../UI/WSSelect/WSSelect";

const ProductCardDetails: FC<{
    product: product;
    images: path_img[];
}> = ({ images, product }) => {
    const [numberRating, setNumberRating] = useState("");
    const [activeStars, isActiveStars] = useState(true);
    const [countProduct, setCountProduct] = useState(1);

    return (
        <ProductCardDetailsStyle>
            <ContainerProductCardDetailsStyle>
                <ContainerImagesStyle>
                    <CarouselProductDetails images={images} />
                </ContainerImagesStyle>
                <ContainerInfoStyle>
                    <PriceContainerStyle>
                        {product.old_price && (
                            <>
                                <OldPriceStyle>
                                    ${formatPrice(product.old_price)}
                                </OldPriceStyle>
                                &nbsp;-&nbsp;
                            </>
                        )}
                        <PriceStyle>${formatPrice(product.price)}</PriceStyle>
                    </PriceContainerStyle>
                    <h1>{product.title}</h1>
                    <ContainerReviewStyle>
                        <ContainerStarsStyle>
                            <StarsRating
                                imageStar="/images/StarProdDetailsSVG-svg.svg"
                                changeRating={activeStars}
                                setNumberRating={setNumberRating}
                                product={product}
                                isActiveStars={isActiveStars}
                            />
                            <NumberRatingStyle>
                                {numberRating}
                            </NumberRatingStyle>
                        </ContainerStarsStyle>
                        <hr />
                        <ReviewStyle>Add review</ReviewStyle>
                    </ContainerReviewStyle>
                    <hr />
                    <p>{product.description}</p>
                    <ContainerInputStyle>
                        <WSButtonCountProducts countProduct={countProduct} />
                        <WSSelect nameSelect="Size" options={product.sizes} />
                        <WSSelect nameSelect="Color" options={product.color} />
                    </ContainerInputStyle>
                </ContainerInfoStyle>
            </ContainerProductCardDetailsStyle>
        </ProductCardDetailsStyle>
    );
};

export default ProductCardDetails;
