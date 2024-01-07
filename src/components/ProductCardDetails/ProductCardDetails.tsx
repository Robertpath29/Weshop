import React, { FC, useState } from "react";
import {
    ContainerButtonStyle,
    ContainerIconShareStyle,
    ContainerImagesStyle,
    ContainerInfoStyle,
    ContainerInputStyle,
    ContainerProductCardDetailsStyle,
    ContainerReviewStyle,
    ContainerShareStyle,
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
import WSButton from "../UI/WSButton/WSButton";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

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
                    <ContainerButtonStyle>
                        <WSButton upper onClick={() => {}}>
                            add to cart
                        </WSButton>
                        <WSButton upper onClick={() => {}}>
                            add to wishlist
                        </WSButton>
                    </ContainerButtonStyle>
                    <ContainerShareStyle>
                        <span>SHARE</span>
                        <ContainerIconShareStyle>
                            <a
                                href="https://www.facebook.com/?locale=uk_UA"
                                target="_blank"
                            >
                                <BiLogoFacebook />
                            </a>
                            <a
                                href="https://twitter.com/i/flow/login"
                                target="_blank"
                            >
                                <FaXTwitter />
                            </a>
                            <a
                                href="https://www.linkedin.com/feed/"
                                target="_blank"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a href="https://www.google.com/" target="_blank">
                                <FaGoogle />
                            </a>
                        </ContainerIconShareStyle>
                    </ContainerShareStyle>
                </ContainerInfoStyle>
            </ContainerProductCardDetailsStyle>
        </ProductCardDetailsStyle>
    );
};

export default ProductCardDetails;
