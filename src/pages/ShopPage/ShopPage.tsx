import React from "react";
import { ShopPageStyle } from "./shopPage.style";
import Header from "../../components/Header/Header";
import HistoryNav from "../../components/HistoryNav/HistoryNav";

const ShopPage = () => {
    return (
        <ShopPageStyle>
            <Header />
            <HistoryNav />
        </ShopPageStyle>
    );
};

export default ShopPage;
