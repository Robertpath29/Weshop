import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SESSION_URL, URL_SERVER } from "../../../api/axiosQuery";
import { responseType } from "../../../types/response.types";

export const sessionApi = createApi({
    reducerPath: "api/session",
    baseQuery: fetchBaseQuery({
        baseUrl: URL_SERVER,
    }),
    endpoints: (build) => ({
        createSession: build.mutation<
            responseType,
            {
                email?: string;
                password?: string;
                id?: number;
                remember_token?: string;
            }
        >({
            query: ({ email, password, id, remember_token }) => ({
                url: SESSION_URL,
                method: "POST",
                body: { email, password, id, remember_token },
            }),
        }),
    }),
});
export const { useCreateSessionMutation } = sessionApi;
