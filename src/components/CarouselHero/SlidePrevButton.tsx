import React from "react";
import { useSwiper } from "swiper/react";

const SlidePrevButton = () => {
    const swiper = useSwiper();

    return (
        <button className="SlidePrevButton" onClick={() => swiper.slidePrev()}>
            <span>P</span>
            <span>R</span>
            <span>E</span>
            <span>V</span>
        </button>
    );
};

export default SlidePrevButton;
