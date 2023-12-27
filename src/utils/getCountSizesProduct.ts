import { size } from "polished";

export const getCountSizesProduct = (sizes: string[] | undefined): object => {
    const numberProductSizes = {
        xs: 0,
        s: 0,
        m: 0,
        l: 0,
        xl: 0,
        xxl: 0,
        xxxl: 0,
    };
    sizes?.forEach((size) => {
        switch (size) {
            case "xs":
                numberProductSizes.xs++;
                break;
            case "s":
                numberProductSizes.s++;
                break;
            case "m":
                numberProductSizes.m++;
                break;
            case "l":
                numberProductSizes.l++;
                break;
            case "xl":
                numberProductSizes.xl++;
                break;
            case "xxl":
                numberProductSizes.xxl++;
                break;
            case "xxxl":
                numberProductSizes.xxxl++;
                break;

            default:
                break;
        }
    });

    return numberProductSizes;
};
