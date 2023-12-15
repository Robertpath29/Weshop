import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HERO_BANNER_IMG_URL, URL_SERVER } from "../../../api/axiosQuery";
import { responseType } from "../../../types/response.types";

export const heroBannerImgApi = createApi({
    reducerPath: "api/heroBannerImg",
    baseQuery: fetchBaseQuery({
        baseUrl: URL_SERVER,
    }),
    endpoints: (build) => ({
        getHeroBannerImg: build.query<responseType, number>({
            query: () => HERO_BANNER_IMG_URL,
        }),
        addImage: build.mutation<
            responseType,
            {
                placeholder: string;
                url: string;
                img: File | undefined;
            }
        >({
            query: ({ placeholder, url, img }) => {
                const formData = new FormData();
                formData.append("placeholder", placeholder);
                formData.append("url", url);
                if (img) {
                    formData.append("img", img);
                }
                return {
                    url: HERO_BANNER_IMG_URL,
                    method: "POST",
                    body: formData,
                };
            },
        }),
    }),
});

export const { useGetHeroBannerImgQuery, useAddImageMutation } =
    heroBannerImgApi;
