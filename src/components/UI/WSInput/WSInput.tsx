import React, { FC } from "react";
import { WSInputStyle } from "./wsInput.style";
import { WSInputType } from "./wsInputType";

const WSInput: FC<WSInputType> = ({
    type,
    placeholder,
    id,
    autocomplete,
    onChange,
    value,
    warning,
}) => {
    return (
        <WSInputStyle
            type={type}
            placeholder={placeholder}
            id={id}
            autoComplete={autocomplete}
            onChange={onChange}
            value={value}
            $errorBorder={warning}
        ></WSInputStyle>
    );
};

export default WSInput;
