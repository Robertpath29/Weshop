import React from "react";
import {
    ProductDisplayOptionStyle,
    ViewStyle,
} from "./productDisplayOption.style";
import { MdViewModule } from "react-icons/md";
import { MdViewList } from "react-icons/md";

const ProductDisplayOption = () => {
    return (
        <ProductDisplayOptionStyle>
            <ViewStyle>
                <MdViewModule />
            </ViewStyle>
            <ViewStyle>
                <MdViewList />
            </ViewStyle>
        </ProductDisplayOptionStyle>
    );
};

export default ProductDisplayOption;
