import React, { FC } from "react";
import {
    CarouselProductDetailsStyle,
    ContainerBtnStyle,
} from "./carouselProductDetails.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { path_img } from "../../types/response.types";
import SlideProductNextButton from "./SlideProductNextButton";
import SlideProductPrevButton from "./SlideProductPrevButton";
import ImagesGroup from "./ImagesGroup/ImagesGroup";

const CarouselProductDetails: FC<{ images: path_img[] }> = ({ images }) => {
    return (
        <CarouselProductDetailsStyle>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                speed={2000}
                // autoplay={{ delay: 3000, disableOnInteraction: false }}
                simulateTouch={false}
            >
                {images.map((img) => (
                    <SwiperSlide key={img.id}>
                        <img
                            className="imagesSlideProduct"
                            src={img.url}
                            alt="product image"
                        />
                    </SwiperSlide>
                ))}
                <ContainerBtnStyle>
                    <SlideProductPrevButton />
                    <SlideProductNextButton />
                </ContainerBtnStyle>
                <ImagesGroup imagesArray={images} />
            </Swiper>
        </CarouselProductDetailsStyle>
    );
};

export default CarouselProductDetails;
