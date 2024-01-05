import React, { FC } from "react";
import { WSStarRatingStyle } from "./wSStarRating.style";
import { FaRegStar } from "react-icons/fa";
import { wSStarRatingType } from "./wSStarRating.types";

const WSStarRating: FC<wSStarRatingType> = ({
    changeRating,
    onClick,
    imageStar,
}) => {
    return (
        <WSStarRatingStyle $changeRating={changeRating} onClick={onClick}>
            <img src={imageStar} alt="star" />
            <FaRegStar />
        </WSStarRatingStyle>
    );
};

export default WSStarRating;
