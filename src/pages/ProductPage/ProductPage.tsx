import React from "react";
import { ProductPageStyle } from "./productPage.style";
import Header from "../../components/Header/Header";
import HistoryNav from "../../components/HistoryNav/HistoryNav";
import { theme } from "../../style/theme.style";
import ProductCardDetails from "../../components/ProductCardDetails/ProductCardDetails";
import { useParams } from "react-router-dom";
import {
    useGetOneProductQuery,
    useGetProductsQuery,
} from "../../redux/store/products/products.api";
import Loading from "../../components/Loading/Loading";
import ProductCardInfo from "../../components/ProductCardInfo/ProductCardInfo";
import CarouselRelatedItems from "../../components/CarouselRelatedItems/CarouselRelatedItems";
import Sponsors from "../../components/Sponsors/Sponsors";
import Footer from "../../components/Footer/Footer";

const ProductPage = () => {
    const idProduct = useParams();

    const { data: dataOneProduct, isLoading: loadingOneProduct } =
        useGetOneProductQuery(Number(idProduct.id));
    const { data: dataProducts, isLoading: loadingProducts } =
        useGetProductsQuery({
            category: dataOneProduct?.product?.category || "",
            color: "",
            current_page: 1,
            dataSizes: "",
            keyword: "",
            max_price: 0,
            min_price: 0,
            per_page: 10,
            sort_by: dataOneProduct?.product?.type_of_clothing || "",
        });

    return (
        <ProductPageStyle>
            <Header />
            <HistoryNav colorBackground={theme.color.base} />
            {loadingOneProduct ? (
                <Loading />
            ) : (
                dataOneProduct?.product &&
                dataOneProduct?.paths_img && (
                    <>
                        <ProductCardDetails
                            product={dataOneProduct.product}
                            images={dataOneProduct.paths_img}
                        />
                        <ProductCardInfo product={dataOneProduct.product} />
                        {loadingProducts ? (
                            <Loading />
                        ) : (
                            dataProducts?.products?.length !== 1 && (
                                <CarouselRelatedItems
                                    dataProducts={dataProducts}
                                    dataOneProduct={dataOneProduct}
                                />
                            )
                        )}
                    </>
                )
            )}
            <Sponsors />
            <Footer />
        </ProductPageStyle>
    );
};

export default ProductPage;
