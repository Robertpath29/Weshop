import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as actionsUser } from "../redux/store/userSlice/userSlice";

const rootAction = {
    ...actionsUser,
};

export const useAction = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
