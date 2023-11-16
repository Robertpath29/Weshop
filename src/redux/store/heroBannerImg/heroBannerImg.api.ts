import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HERO_BANNER_IMG_URL, URL_SERVER } from "../../../api/axiosQuery";
import { heroBannerImgType } from "./heroBannerImg.types";

export const heroBannerImgApi = createApi({
    reducerPath: "api/heroBannerImg",
    baseQuery: fetchBaseQuery({
        baseUrl: URL_SERVER,
    }),
    endpoints: (build) => ({
        getHeroBannerImg: build.query<heroBannerImgType, number>({
            query: () => HERO_BANNER_IMG_URL,
        }),
    }),
});

export const { useGetHeroBannerImgQuery } = heroBannerImgApi;
