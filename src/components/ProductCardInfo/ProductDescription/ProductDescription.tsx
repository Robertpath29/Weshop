import React, { FC, useEffect, useState } from "react";
import { ProductDescriptionStyle } from "./productDescription.style";
import { product } from "../../../types/response.types";
import ProductComponent from "../ProductComponent/ProductComponent";

const ProductDescription: FC<{ product: product }> = ({ product }) => {
    const [compositions, setCompositions] = useState<string[][]>([[]]);
    useEffect(() => {
        const newArray = [];
        for (let index = 0; index < product.compositions.length; index += 2) {
            newArray.push([
                product.compositions[index],
                product.compositions[index + 1],
            ]);
        }
        setCompositions(newArray);
    }, []);

    return (
        <ProductDescriptionStyle>
            <p>{product.extended_description}</p>
            {compositions.map((component, index) => (
                <ProductComponent key={index} component={component} />
            ))}
        </ProductDescriptionStyle>
    );
};

export default ProductDescription;
