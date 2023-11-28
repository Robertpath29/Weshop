import { createSlice } from "@reduxjs/toolkit";
import { userType } from "./userSlice.types";

const initialState: userType = {};

export const userSlice = createSlice({
    name: " user",
    initialState,
    reducers: {
        getCurrent_user: (state, { payload }) => {
            state = payload;
        },
    },
});

export const { actions, reducer } = userSlice;
