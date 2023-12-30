import React, { FC } from "react";
import { ImagesGroupStyle } from "./imagesGroup.style";
import { path_img } from "../../../types/response.types";
import { useSwiper } from "swiper/react";

const ImagesGroup: FC<{
    imagesArray: path_img[];
}> = ({ imagesArray }) => {
    const swiper = useSwiper();

    return (
        <ImagesGroupStyle>
            {imagesArray.map((img, index) => (
                <img
                    key={img.id}
                    className="imagesSlideProduct"
                    src={img.url}
                    alt="product image"
                    onClick={() => {
                        swiper.slideTo(index);
                    }}
                />
            ))}
        </ImagesGroupStyle>
    );
};

export default ImagesGroup;
