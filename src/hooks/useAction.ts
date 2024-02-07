import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as actionsUser } from "../redux/store/userSlice/userSlice";
import { actions as actionsFilterProduct } from "../redux/store/FilterSlice/filterSlice";
import { actions as actionsBasket } from "../redux/store/basketSlice/basketSlice";

const rootAction = {
    ...actionsUser,
    ...actionsFilterProduct,
    ...actionsBasket,
};

export const useAction = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
