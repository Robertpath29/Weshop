import {
    CarouselHeroStyle,
    StandardBanner,
    SubTitle,
    Title,
    TitleStyle,
} from "./carouselHero.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrevButton";
import WSButton from "../UI/WSButton/WSButton";
import { URL_SERVER } from "../../api/axiosQuery";
import { useGetHeroBannerImgQuery } from "../../redux/store/heroBannerImg/heroBannerImg.api";

const CarouselHero = () => {
    const { data, error, isLoading } = useGetHeroBannerImgQuery(0);

    return (
        <CarouselHeroStyle>
            {data?.images.length !== 0 ? (
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    speed={2000}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    simulateTouch={false}
                >
                    {data?.images.map((img) => (
                        <SwiperSlide key={img.id}>
                            <img
                                className="imagesSlide"
                                src={URL_SERVER + img.path}
                                alt={img.placeholder}
                            />
                        </SwiperSlide>
                    ))}
                    {data && data?.images.length > 1 ? (
                        <>
                            <SlideNextButton />
                            <SlidePrevButton />
                        </>
                    ) : (
                        <></>
                    )}
                </Swiper>
            ) : (
                <StandardBanner
                    src="/images/banner_standard_photo.jpg"
                    alt="banner"
                />
            )}

            <TitleStyle>
                <Title>fashion is nothing</Title>
                <SubTitle>
                    but <span>mischief</span>
                </SubTitle>
                <WSButton upper onClick={() => {}}>
                    shop now
                </WSButton>
            </TitleStyle>
        </CarouselHeroStyle>
    );
};

export default CarouselHero;
