import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ADMIN_USERS_URL, URL_SERVER } from "../../../api/axiosQuery";
import { responseType } from "../../../types/response.types";

export const usersAdminPanelApi = createApi({
    reducerPath: "api/usersAdminPanel",
    baseQuery: fetchBaseQuery({
        baseUrl: URL_SERVER,
    }),
    endpoints: (build) => ({
        getUsers: build.query<responseType, string | undefined>({
            query: (email) => ADMIN_USERS_URL + `?email=${email}`,
        }),
    }),
});

export const { useGetUsersQuery } = usersAdminPanelApi;
