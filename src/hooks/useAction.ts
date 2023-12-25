import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as actionsUser } from "../redux/store/userSlice/userSlice";
import { actions as actionsFilterProduct } from "../redux/store/FilterSlice/filterSlice";

const rootAction = {
    ...actionsUser,
    ...actionsFilterProduct,
};

export const useAction = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
