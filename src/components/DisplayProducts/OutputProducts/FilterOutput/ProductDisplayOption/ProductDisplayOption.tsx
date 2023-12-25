import React, { FC, useState } from "react";
import {
    ProductDisplayOptionStyle,
    ViewStyle,
} from "./productDisplayOption.style";
import { MdViewModule } from "react-icons/md";
import { MdViewList } from "react-icons/md";

const ProductDisplayOption: FC<{
    setProductDisplay: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setProductDisplay }) => {
    const [blockActive, isBlockActive] = useState(true);
    const [listActive, isListActive] = useState(false);
    return (
        <ProductDisplayOptionStyle>
            <ViewStyle
                $active={blockActive}
                onClick={() => {
                    isBlockActive(true);
                    setProductDisplay("block");
                    isListActive(false);
                }}
            >
                <MdViewModule />
            </ViewStyle>
            <ViewStyle
                $active={listActive}
                onClick={() => {
                    isBlockActive(false);
                    setProductDisplay("list");
                    isListActive(true);
                }}
            >
                <MdViewList />
            </ViewStyle>
        </ProductDisplayOptionStyle>
    );
};

export default ProductDisplayOption;
