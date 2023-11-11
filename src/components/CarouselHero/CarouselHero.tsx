import { CarouselHeroStyle } from "./carouselHero.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrevButton";

const CarouselHero = () => {
    return (
        <CarouselHeroStyle>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                speed={2000}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                <SwiperSlide>
                    <img
                        className="imagesSlide"
                        src="./friendly-smart-basenji-dog-giving-his-paw-close-up-isolated-white_346278-1626.jpg"
                        alt="1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="imagesSlide"
                        src="./isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
                        alt="1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="imagesSlide"
                        src="./top-view-pet-accessories_23-2150930427.jpg"
                        alt="1"
                    />
                </SwiperSlide>
                <SlideNextButton />
                <SlidePrevButton />
            </Swiper>
        </CarouselHeroStyle>
    );
};

export default CarouselHero;
