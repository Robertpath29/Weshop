import { product } from "../../types/response.types";

export type starsRatingType = {
    changeRating: boolean;
    product: product;
    imageStar: string;
    setNumberRating?: React.Dispatch<React.SetStateAction<string>>;
    isActiveStars?: React.Dispatch<React.SetStateAction<boolean>>;
};
