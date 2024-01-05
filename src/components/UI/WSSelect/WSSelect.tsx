import React, { FC } from "react";
import { WSSelectStyle } from "./wSSelect.style";
import { WSSelectType } from "./wSSelect.types";

const WSSelect: FC<WSSelectType> = ({ nameSelect, options }) => {
    return (
        <WSSelectStyle>
            <option value={nameSelect}>{nameSelect}</option>
            {Array.isArray(options) ? (
                options.map((option) => (
                    <option value={option}>{option}</option>
                ))
            ) : (
                <option value={options}>{options}</option>
            )}
        </WSSelectStyle>
    );
};

export default WSSelect;
