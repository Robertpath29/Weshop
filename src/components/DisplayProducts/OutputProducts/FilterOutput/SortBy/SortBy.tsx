import React, { FC, useEffect } from "react";
import { SortByStyle } from "./sortBy.style";
import { useLocation, useNavigate } from "react-router-dom";

const SortBy: FC<{
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
    setPathHistory: React.Dispatch<
        React.SetStateAction<{
            category: string;
            sort: string;
        }>
    >;
    pathHistory: {
        category: string;
        sort: string;
    };
}> = ({ setSortBy, setPathHistory, pathHistory }) => {
    const routeSort = useNavigate();
    const path = useLocation().pathname;
    useEffect(() => {
        const arraySortName = [
            "t-shirt",
            "cap",
            "jeans",
            "coat",
            "shirt",
            "hoodies",
            "sunglasses",
        ];
        const sortNameArray = path.split("/", 10);
        const sortName = sortNameArray[sortNameArray.length - 1];
        const confirm = arraySortName.includes(sortName);
        if (confirm) {
            setSortBy(sortName);
        } else {
            setSortBy("data");
        }
    }, [path]);
    return (
        <SortByStyle>
            <span>Sort by:</span>
            <select
                defaultValue={""}
                onChange={(e) => {
                    setSortBy(e.target.value);
                    if (e.target.value === "data") {
                        setPathHistory({ ...pathHistory, sort: "" });
                        routeSort(
                            `/shop/${
                                pathHistory.category && pathHistory.category
                            }`
                        );
                        return;
                    }
                    setPathHistory({ ...pathHistory, sort: e.target.value });
                    routeSort(
                        `/shop/${
                            pathHistory.category && pathHistory.category + "/"
                        }${e.target.value}`
                    );
                }}
            >
                <option value="data">Date</option>
                <option value="t-shirt">T-shirt</option>
                <option value="cap">Cap</option>
                <option value="jeans">Jeans</option>
                <option value="coat">Coat</option>
                <option value="shirt">Shirt</option>
                <option value="hoodies">Hoodies</option>
                <option value="sunglasses">Sunglasses</option>
            </select>
        </SortByStyle>
    );
};

export default SortBy;
