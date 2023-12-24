import React, { FC, useEffect, useState } from "react";
import { NotFoundStyle, ProductsStyle } from "./products.style";
import { products } from "../../../../types/response.types";
import { useGetProductsQuery } from "../../../../redux/store/products/products.api";
import Loading from "../../../Loading/Loading";
import ProductCard from "../../ProductCard/ProductCard";

const Products: FC<{
    perPage: number;
    currentPage: number;
    setPageCount: React.Dispatch<React.SetStateAction<number>>;
    sortBy: string;
    color: string;
}> = ({ perPage, currentPage, setPageCount, sortBy, color }) => {
    const [arrayProducts, setArrayProducts] = useState<products[]>();
    const [notFound, isNotFound] = useState(false);
    const { data, isLoading } = useGetProductsQuery({
        current_page: currentPage,
        per_page: perPage,
        sort_by: sortBy,
        color: color,
    });

    useEffect(() => {
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
        <ProductsStyle>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {notFound ? (
                        <NotFoundStyle>Product not found!</NotFoundStyle>
                    ) : (
                        arrayProducts?.map((product, key) => (
                            <ProductCard product={product} key={key} />
                        ))
                    )}
                </>
            )}
        </ProductsStyle>
    );
};

export default Products;
