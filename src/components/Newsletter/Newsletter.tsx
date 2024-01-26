import React, { useEffect, useState } from "react";
import {
    ContainerFeedbackStyle,
    ContainerInputBtnStyle,
    ContainerNewsletterFeedbackStyle,
    ContainerNewsletterStyle,
    ContainerTrendingRatedUpdatedStyle,
    NewsletterStyle,
    RatedGroupStyle,
    TrendingGroupStyle,
    UpdatedGroupStyle,
} from "./newsletter.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducer/combineReducer";
import NewsletterProduct from "./NewsletterProduct/NewsletterProduct";
import { useGetProductsQuery } from "../../redux/store/products/products.api";
import { products } from "../../types/response.types";
import Loading from "../Loading/Loading";
import WSInput from "../UI/WSInput/WSInput";
import { GoArrowRight } from "react-icons/go";
import Sponsors from "../Sponsors/Sponsors";
import Footer from "../Footer/Footer";

const Newsletter = () => {
    const [arrayTopRated, setArrayTopRated] = useState<products[]>([]);
    const { best_sale } = useSelector(
        (state: reducersType) => state.filterProduct
    );
    const { data: dataProducts, isLoading: loadingProducts } =
        useGetProductsQuery({
            category: "",
            color: "",
            current_page: 1,
            dataSizes: "",
            keyword: "",
            max_price: 0,
            min_price: 0,
            per_page: 1000000,
            sort_by: "data",
        });

    const isTopRated = (product: products) => {
        let isRated = null;
        const averageNumberRating =
            product.product.number_all_stars /
            product.product.users_who_have_rated.length;

        if (averageNumberRating >= 4.8) {
            isRated = true;
        } else {
            isRated = false;
        }

        return isRated;
    };

    useEffect(() => {
        const array =
            dataProducts && dataProducts.products
                ? dataProducts.products?.filter((product) =>
                      isTopRated(product)
                  )
                : [];
        for (let x = array.length - 1; x > 0; x--) {
            const j = Math.floor(Math.random() * (x + 1));
            [array[x], array[j]] = [array[j], array[x]];
        }
        setArrayTopRated(array);
    }, [dataProducts]);

    return (
        <NewsletterStyle>
            <ContainerNewsletterStyle>
                {loadingProducts ? (
                    <Loading />
                ) : (
                    <ContainerTrendingRatedUpdatedStyle>
                        <TrendingGroupStyle>
                            <h1>Trending</h1>
                            {best_sale &&
                                best_sale.map((product, index) => (
                                    <NewsletterProduct
                                        index={index}
                                        key={product.product.id}
                                        product={product}
                                    />
                                ))}
                        </TrendingGroupStyle>
                        <RatedGroupStyle>
                            <h1>top rated</h1>
                            {arrayTopRated &&
                                arrayTopRated.map((product, index) => {
                                    if (index > 2) return;
                                    return (
                                        <NewsletterProduct
                                            index={index}
                                            key={product.product.id}
                                            product={product}
                                        />
                                    );
                                })}
                        </RatedGroupStyle>
                        <UpdatedGroupStyle>
                            <h1>date updated</h1>
                            {dataProducts &&
                                dataProducts?.products?.map(
                                    (product, index) => {
                                        if (index > 2) return;
                                        return (
                                            <NewsletterProduct
                                                index={index}
                                                key={product.product.id}
                                                product={product}
                                                reverse
                                            />
                                        );
                                    }
                                )}
                        </UpdatedGroupStyle>
                    </ContainerTrendingRatedUpdatedStyle>
                )}
                <ContainerNewsletterFeedbackStyle>
                    <img
                        src="/images/background_login.jpeg"
                        alt="images feedback"
                    />
                    <ContainerFeedbackStyle>
                        <h1>Newsletter</h1>
                        <span>we are promising, we will not spam</span>
                        <ContainerInputBtnStyle>
                            <WSInput
                                type="email"
                                placeholder="Enter your email"
                            />
                            <button>
                                <GoArrowRight />
                            </button>
                        </ContainerInputBtnStyle>
                    </ContainerFeedbackStyle>
                </ContainerNewsletterFeedbackStyle>
            </ContainerNewsletterStyle>
            <Sponsors />
            <Footer />
        </NewsletterStyle>
    );
};

export default Newsletter;
