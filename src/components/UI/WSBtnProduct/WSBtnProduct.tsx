import React, { FC } from "react";
import {
    ContainerBtnStyle,
    ContainerBtnTxtStyle,
    TextStyle,
    WSBtnBasketStyle,
} from "./wSBtnProduct.style";
import { wSBtnBasketType } from "./wSBtnProduct.types";

const WSBtnProduct: FC<wSBtnBasketType> = ({
    active,
    SvgIcon,
    textAdd,
    onClick,
    right,
}) => {
    return (
        <WSBtnBasketStyle $active={active} onClick={onClick}>
            <ContainerBtnStyle $active={active}>
                <SvgIcon />
            </ContainerBtnStyle>
            <ContainerBtnTxtStyle $active={active} $right={right}>
                <TextStyle>{textAdd}</TextStyle>
            </ContainerBtnTxtStyle>
        </WSBtnBasketStyle>
    );
};

export default WSBtnProduct;
