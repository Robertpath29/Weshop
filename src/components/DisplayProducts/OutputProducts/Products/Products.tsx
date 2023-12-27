import React, { FC, useEffect, useState } from "react";
import { NotFoundStyle, ProductsStyle } from "./products.style";
import { products } from "../../../../types/response.types";
import { useGetProductsQuery } from "../../../../redux/store/products/products.api";
import Loading from "../../../Loading/Loading";
import ProductCard from "../../ProductCard/ProductCard";
import { useAction } from "../../../../hooks/useAction";
import { getCountProductCategory } from "../../../../utils/getCountProductCategory";
import { getCountSizesProduct } from "../../../../utils/getCountSizesProduct";

const Products: FC<{
    perPage: number;
    currentPage: number;
    setPageCount: React.Dispatch<React.SetStateAction<number>>;
    sortBy: string;
    color: string;
    productDisplay: string;
    categoryProduct: string;
    valueRange: number[];
    dataSizes: string;
}> = ({
    perPage,
    currentPage,
    setPageCount,
    sortBy,
    color,
    productDisplay,
    categoryProduct,
    valueRange,
    dataSizes,
}) => {
    const [arrayProducts, setArrayProducts] = useState<products[]>();
    const [notFound, isNotFound] = useState(false);
    const { getNumberProductCategory, getMaxPrice, getCountSizes } =
        useAction();
    const { data, isLoading } = useGetProductsQuery({
        current_page: currentPage,
        per_page: perPage,
        sort_by: sortBy,
        color: color,
        category: categoryProduct,
        min_price: valueRange[0],
        max_price: valueRange[1],
        dataSizes: dataSizes,
    });

    useEffect(() => {
        getNumberProductCategory(getCountProductCategory(data?.category));
        getCountSizes(getCountSizesProduct(data?.oll_sizes));
        if (data?.max_price) {
            getMaxPrice(parseFloat(data.max_price));
        }
        setArrayProducts(data?.products);
        if (data?.total_pages) {
            setPageCount(data?.total_pages);
        }
        if (data?.products?.length === 0) {
            setPageCount(0);
            isNotFound(true);
        } else {
            isNotFound(false);
        }
    }, [data, currentPage]);
    return (
        <ProductsStyle $prodDisplay={productDisplay}>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {notFound ? (
                        <NotFoundStyle>Product not found!</NotFoundStyle>
                    ) : (
                        arrayProducts?.map((product, key) => (
                            <ProductCard
                                product={product}
                                key={key}
                                productDisplay={productDisplay}
                            />
                        ))
                    )}
                </>
            )}
        </ProductsStyle>
    );
};

export default Products;
