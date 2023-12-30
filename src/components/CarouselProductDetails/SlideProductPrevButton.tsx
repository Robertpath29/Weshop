import React from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";

const SlideProductPrevButton = () => {
    const swiper = useSwiper();

    return (
        <button
            className="SlideProductPrevButton"
            onClick={() => swiper.slidePrev()}
        >
            <IoIosArrowBack />
        </button>
    );
};

export default SlideProductPrevButton;
