import React, { FC } from "react";
import { WSInputStyle } from "./wsInput.style";
import { WSInputType } from "./wsInputType";

const WSInput: FC<WSInputType> = ({ type, placeholder, id, autocomplete }) => {
    return (
        <WSInputStyle
            type={type}
            placeholder={placeholder}
            id={id}
            autoComplete={autocomplete}
        ></WSInputStyle>
    );
};

export default WSInput;
