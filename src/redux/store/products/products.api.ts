import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PRODUCTS_URL, URL_SERVER } from "../../../api/axiosQuery";
import { responseType } from "../../../types/response.types";

export const productsApi = createApi({
    reducerPath: "api/products",
    baseQuery: fetchBaseQuery({
        baseUrl: URL_SERVER,
    }),
    endpoints: (build) => ({
        getProducts: build.query<
            responseType,
            {
                current_page: number;
                per_page: number;
                sort_by: string;
                color: string;
                category: string;
                min_price: number;
                max_price: number;
            }
        >({
            query: ({
                per_page,
                current_page,
                sort_by,
                color,
                category,
                max_price,
                min_price,
            }) =>
                PRODUCTS_URL +
                `?page=${current_page}&per_page=${per_page}&sort_by=${sort_by}&color=${color}&category=${category}&min_price=${min_price}&max_price=${max_price} `,
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;
