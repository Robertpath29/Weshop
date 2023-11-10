import React from "react";
import { InputStyle, SearchStyle } from "./search.style";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    return (
        <SearchStyle>
            <InputStyle type="text" placeholder="search" />
            <AiOutlineSearch />
        </SearchStyle>
    );
};

export default Search;
