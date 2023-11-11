import React from "react";
import { useSwiper } from "swiper/react";

const SlideNextButton = () => {
    const swiper = useSwiper();

    return (
        <button className="SlideNextButton" onClick={() => swiper.slideNext()}>
            <span>N</span>
            <span>E</span>
            <span>X</span>
            <span>T</span>
        </button>
    );
};

export default SlideNextButton;
