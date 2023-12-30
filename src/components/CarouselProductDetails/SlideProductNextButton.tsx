import React from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";

const SlideProductNextButton = () => {
    const swiper = useSwiper();

    return (
        <button
            className="SlideProductNextButton"
            onClick={() => swiper.slideNext()}
        >
            <IoIosArrowForward />
        </button>
    );
};

export default SlideProductNextButton;
