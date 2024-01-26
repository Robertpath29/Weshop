import React from "react";
import { ContainerSponsorsStyle, SponsorsStyle } from "./sponsors.style";
import { SiAdidas } from "react-icons/si";
import { SiZara } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { SiPuma } from "react-icons/si";
import { CgChanel } from "react-icons/cg";
import { SiDior } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const Sponsors = () => {
    return (
        <SponsorsStyle>
            <ContainerSponsorsStyle>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={6}
                    loop={false}
                    speed={2000}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    simulateTouch={false}
                >
                    <SwiperSlide>
                        <SiAdidas />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SiZara />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SiNike />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SiPuma />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CgChanel />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SiDior />
                    </SwiperSlide>
                </Swiper>
            </ContainerSponsorsStyle>
        </SponsorsStyle>
    );
};

export default Sponsors;
