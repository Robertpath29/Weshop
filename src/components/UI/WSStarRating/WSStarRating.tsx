import React, { FC } from "react";
import { WSStarRatingStyle } from "./sSStarRating.style";
import { FaRegStar } from "react-icons/fa";
import { wSStarRatingType } from "./wSStarRating.types";

const WSStarRating: FC<wSStarRatingType> = ({ changeRating, onClick }) => {
    return (
        <WSStarRatingStyle $changeRating={changeRating} onClick={onClick}>
            <img src="/images/StarSVG.svg" alt="star" />
            <FaRegStar />
        </WSStarRatingStyle>
    );
};

export default WSStarRating;
