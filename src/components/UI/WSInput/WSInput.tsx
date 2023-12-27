import React, { FC } from "react";
import { WSInputStyle } from "./wsInput.style";
import { WSInputType } from "./wsInputType";

const WSInput: FC<WSInputType> = ({
    type,
    placeholder,
    id,
    autocomplete,
    onChange,
    onClick,
    value,
    warning,
    disabled,
    multiple,
    name,
    checked,
}) => {
    return (
        <WSInputStyle
            type={type}
            placeholder={placeholder}
            id={id}
            autoComplete={autocomplete}
            onChange={onChange}
            onClick={onClick}
            value={value}
            $errorBorder={warning}
            disabled={disabled}
            multiple={multiple}
            name={name}
            checked={checked}
        ></WSInputStyle>
    );
};

export default WSInput;
