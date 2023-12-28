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
}) => {
    return (
        <WSBtnBasketStyle $active={active} onClick={onClick}>
            <ContainerBtnStyle $active={active}>
                <SvgIcon />
            </ContainerBtnStyle>
            <ContainerBtnTxtStyle $active={active}>
                <TextStyle>{textAdd}</TextStyle>
            </ContainerBtnTxtStyle>
        </WSBtnBasketStyle>
    );
};

export default WSBtnProduct;
