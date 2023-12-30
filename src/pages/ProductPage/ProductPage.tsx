import React from "react";
import { ProductPageStyle } from "./productPage.style";
import Header from "../../components/Header/Header";
import HistoryNav from "../../components/HistoryNav/HistoryNav";

const ProductPage = () => {
    return (
        <ProductPageStyle>
            <Header />
            <HistoryNav />
        </ProductPageStyle>
    );
};

export default ProductPage;
