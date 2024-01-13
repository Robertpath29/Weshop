import React, { FC } from "react";
import {
    DynamicSliderStyle,
    ProductComponentStyle,
    SliderStyle,
} from "./productComponent.style";

const ProductComponent: FC<{ component: string[] }> = ({ component }) => {
    let componentName = "";
    if (component[0]) {
        componentName = component[0].toLowerCase();
        componentName = componentName[0].toUpperCase() + componentName.slice(1);
    }

    return (
        <ProductComponentStyle>
            <h1>{componentName}</h1>
            <DynamicSliderStyle>
                <SliderStyle $percent={component[1]} />
            </DynamicSliderStyle>
        </ProductComponentStyle>
    );
};
{
}

export default ProductComponent;
