import React from "react";
import { ProductPageStyle } from "./productPage.style";
import Header from "../../components/Header/Header";
import HistoryNav from "../../components/HistoryNav/HistoryNav";
import { theme } from "../../style/theme.style";
import ProductCardDetails from "../../components/ProductCardDetails/ProductCardDetails";
import { useParams } from "react-router-dom";
import { useGetOneProductQuery } from "../../redux/store/products/products.api";
import Loading from "../../components/Loading/Loading";

const ProductPage = () => {
    const idProduct = useParams();

    const { data, isLoading } = useGetOneProductQuery(Number(idProduct.id));

    return (
        <ProductPageStyle>
            <Header />
            <HistoryNav colorBackground={theme.color.base} />
            {isLoading ? (
                <Loading />
            ) : (
                data?.product &&
                data?.paths_img && (
                    <ProductCardDetails
                        product={data.product}
                        images={data.paths_img}
                    />
                )
            )}
        </ProductPageStyle>
    );
};

export default ProductPage;
