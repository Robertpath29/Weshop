import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SESSION_URL, URL_SERVER } from "../../../api/axiosQuery";
import { sessionType } from "./session.types";

export const sessionApi = createApi({
    reducerPath: "api/session",
    baseQuery: fetchBaseQuery({
        baseUrl: URL_SERVER,
    }),
    endpoints: (build) => ({
        createSession: build.mutation<
            sessionType,
            { email: string; password: string }
        >({
            query: ({ email, password }) => ({
                url: SESSION_URL,
                method: "POST",
                body: { email, password },
            }),
        }),
    }),
});
export const { useCreateSessionMutation } = sessionApi;
