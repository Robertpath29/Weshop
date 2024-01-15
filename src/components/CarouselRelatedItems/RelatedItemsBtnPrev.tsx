import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useSwiper } from "swiper/react";

const RelatedItemsBtnPrev = () => {
    const swiper = useSwiper();

    return (
        <button
            className="relatedItemsBtnPrev"
            onClick={() => swiper.slidePrev()}
        >
            <IoIosArrowBack />
        </button>
    );
};

export default RelatedItemsBtnPrev;
