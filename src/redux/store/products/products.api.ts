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
            }
        >({
            query: ({ per_page, current_page, sort_by, color }) =>
                PRODUCTS_URL +
                `?page=${current_page}&per_page=${per_page}&sort_by=${sort_by}&color=${color} `,
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;
