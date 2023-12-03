import { createSlice } from "@reduxjs/toolkit";
import { userType } from "../../../types/user.types";

const initialState: userType = {};

export const userSlice = createSlice({
    name: " user",
    initialState,
    reducers: {
        getCurrent_user: (state, { payload }) => {
            Object.assign(state, payload);
        },

        deleteCurrent_user: () => {
            return initialState;
        },
    },
});

export const { actions, reducer } = userSlice;
