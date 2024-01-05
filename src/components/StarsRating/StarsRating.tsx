import React, { FC, useEffect, useState } from "react";
import { StarsRatingStyle, StatusStyle } from "./starsRating.style";
import WSStarRating from "../UI/WSStarRating/WSStarRating";
import { starsRatingType } from "./starsRating.types";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducer/combineReducer";
import { useNavigate } from "react-router-dom";
import { PRODUCTS_URL, axiosPut } from "../../api/axiosQuery";

const StarsRating: FC<starsRatingType> = ({
    changeRating,
    product,
    setNumberRating,
    isActiveStars,
    imageStar,
}) => {
    const [statusRating, setStatusRating] = useState(0);
    const userId = useSelector((state: reducersType) => state.user.id);
    const routeLogin = useNavigate();

    const changeProductRating = async (productRating: number) => {
        if (!userId) routeLogin("/login");
        const response = await axiosPut(PRODUCTS_URL + `/${product.id}`, {
            user_id: userId,
            rating: productRating,
        });
        if (isActiveStars) isActiveStars(false);
        window.location.reload();
    };
    useEffect(() => {
        if (changeRating) {
            if (userId) {
                const isUserRated =
                    product.users_who_have_rated.includes(userId);

                if (isUserRated) {
                    if (isActiveStars) isActiveStars(false);
                } else {
                    setStatusRating(0);
                }
            }
        }
        const averageNumberRating =
            product.number_all_stars / product.users_who_have_rated.length;
        if (averageNumberRating) {
            const ratingPercentage = (averageNumberRating * 100) / 5;
            setStatusRating(ratingPercentage);
            if (setNumberRating) setNumberRating(`${averageNumberRating}`);
        } else {
            if (setNumberRating) setNumberRating("Not received stars");
        }
    }, []);

    return (
        <StarsRatingStyle>
            <StatusStyle $statusRating={statusRating} />
            <WSStarRating
                imageStar={imageStar}
                changeRating={changeRating}
                onClick={() => {
                    if (changeRating) changeProductRating(1);
                }}
            />
            <WSStarRating
                imageStar={imageStar}
                changeRating={changeRating}
                onClick={() => {
                    if (changeRating) changeProductRating(2);
                }}
            />
            <WSStarRating
                imageStar={imageStar}
                changeRating={changeRating}
                onClick={() => {
                    if (changeRating) changeProductRating(3);
                }}
            />
            <WSStarRating
                imageStar={imageStar}
                changeRating={changeRating}
                onClick={() => {
                    if (changeRating) changeProductRating(4);
                }}
            />
            <WSStarRating
                imageStar={imageStar}
                changeRating={changeRating}
                onClick={() => {
                    if (changeRating) changeProductRating(5);
                }}
            />
        </StarsRatingStyle>
    );
};

export default StarsRating;
