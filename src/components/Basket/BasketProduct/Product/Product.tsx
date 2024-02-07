import React, { FC } from "react";
import {
    ContainerInfoStyle,
    ProductContainerStyle,
    ProductStyle,
} from "./product.style";
import { products } from "../../../../types/response.types";
import { formatPrice } from "../../../../utils/formatPrice";
import {
    OldPriceStyle,
    PriceStyle,
} from "../../../ProductCardDetails/productCardDetails.style";
import { useAction } from "../../../../hooks/useAction";
import { deleteProductBasket } from "../../../../utils/deleteProductBasket";
import { useNavigate } from "react-router-dom";

const Product: FC<{ product: products }> = ({ product }) => {
    const { deleteProductInBasket } = useAction();
    const routeProduct = useNavigate();

    return (
        <ProductStyle>
            <ProductContainerStyle>
                <img
                    src={product.path_img[3].url}
                    alt="images product"
                    onClick={() => {
                        routeProduct(
                            `/shop/${product.product.category}/${product.product.type_of_clothing}/${product.product.title}/${product.product.id}`
                        );
                    }}
                />
                <ContainerInfoStyle>
                    <h1
                        onClick={() => {
                            routeProduct(
                                `/shop/${product.product.category}/${product.product.type_of_clothing}/${product.product.title}/${product.product.id}`
                            );
                        }}
                    >
                        {product.product.title[0] +
                            product.product.title.slice(1).toLowerCase()}
                    </h1>
                    {product.product.old_price && (
                        <OldPriceStyle>
                            ${formatPrice(product.product.old_price)}
                        </OldPriceStyle>
                    )}
                    {product.product.old_price && <span>&nbsp;-&nbsp;</span>}
                    <PriceStyle>
                        ${formatPrice(product.product.price)}
                    </PriceStyle>
                </ContainerInfoStyle>
                <button
                    onClick={() => {
                        deleteProductBasket(
                            product.product.id,
                            deleteProductInBasket
                        );
                    }}
                >
                    x
                </button>
            </ProductContainerStyle>
            <hr />
        </ProductStyle>
    );
};

export default Product;
