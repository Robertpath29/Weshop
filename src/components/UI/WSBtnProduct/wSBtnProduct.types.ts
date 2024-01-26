import { IconType } from "react-icons";

export type wSBtnBasketType = {
    active: boolean;
    SvgIcon: IconType;
    textAdd: string;
    onClick: () => void;
    right?: boolean;
};
