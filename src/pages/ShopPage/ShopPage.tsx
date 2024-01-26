import React from "react";
import { ShopPageStyle } from "./shopPage.style";
import Header from "../../components/Header/Header";
import HistoryNav from "../../components/HistoryNav/HistoryNav";
import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";
import Newsletter from "../../components/Newsletter/Newsletter";

const ShopPage = () => {
    return (
        <ShopPageStyle>
            <Header />
            <HistoryNav />
            <DisplayProducts />
            <hr />
            <Newsletter />
        </ShopPageStyle>
    );
};

export default ShopPage;
