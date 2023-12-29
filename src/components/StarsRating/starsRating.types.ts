import { products } from "../../types/response.types";

export type starsRatingType = {
    changeRating: boolean;
    product: products;
    setNumberRating?: React.Dispatch<React.SetStateAction<string>>;
    isActiveStars?: React.Dispatch<React.SetStateAction<boolean>>;
};
