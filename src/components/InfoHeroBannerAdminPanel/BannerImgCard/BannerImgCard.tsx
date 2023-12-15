import React, { FC, useState } from "react";
import { BannerImgCardStyle } from "./bannerImgCard.style";
import { image } from "../../../types/response.types";
import {
    HERO_BANNER_IMG_URL,
    URL_SERVER,
    axiosDelete,
} from "../../../api/axiosQuery";

const BannerImgCard: FC<{ img: image }> = ({ img }) => {
    const [visBtn, isVisBtn] = useState(false);
    const deleteImg = () => {
        const confirm = window.confirm("Are you sure?");
        if (confirm) {
            axiosDelete(HERO_BANNER_IMG_URL + `/${img.id}`);
        }
    };
    return (
        <BannerImgCardStyle
            $visBtn={visBtn}
            onMouseOver={() => isVisBtn(true)}
            onMouseOut={() => isVisBtn(false)}
        >
            <img src={`${URL_SERVER}/` + img.path} alt={img.placeholder} />
            <span>Alt: {img.placeholder}</span>
            {img.url && (
                <p>
                    Link url:
                    <a href={img.url} target="_blank">
                        {img.url}
                    </a>
                </p>
            )}
            <button
                onClick={() => {
                    deleteImg();
                }}
            >
                X
            </button>
        </BannerImgCardStyle>
    );
};

export default BannerImgCard;
