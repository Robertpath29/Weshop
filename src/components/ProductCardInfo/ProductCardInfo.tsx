import React, { FC, useState } from "react";
import {
    ContainerBtnProductCardInfoStyle,
    ContainerProductCardInfoStyle,
    ProductCardInfoStyle,
} from "./productCardInfo.style";
import WSButton from "../UI/WSButton/WSButton";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductHistory from "./ProductHistory/ProductHistory";
import { product } from "../../types/response.types";

const ProductCardInfo: FC<{ product: product }> = ({ product }) => {
    const [component, setComponent] = useState<JSX.Element>(
        <ProductDescription product={product} />
    );
    return (
        <ProductCardInfoStyle>
            <ContainerProductCardInfoStyle>
                <ContainerBtnProductCardInfoStyle>
                    <WSButton
                        upper
                        onClick={() => {
                            setComponent(
                                <ProductDescription product={product} />
                            );
                        }}
                    >
                        description
                    </WSButton>
                    <WSButton
                        upper
                        onClick={() => {
                            setComponent(<ProductHistory product={product} />);
                        }}
                    >
                        history
                    </WSButton>
                </ContainerBtnProductCardInfoStyle>
            </ContainerProductCardInfoStyle>
            {component}
        </ProductCardInfoStyle>
    );
};

export default ProductCardInfo;
