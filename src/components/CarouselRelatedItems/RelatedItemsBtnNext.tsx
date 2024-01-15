import React from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";

const RelatedItemsBtnNext = () => {
    const swiper = useSwiper();

    return (
        <button
            className="relatedItemsBtnNext"
            onClick={() => swiper.slideNext()}
        >
            <IoIosArrowForward />
        </button>
    );
};

export default RelatedItemsBtnNext;
