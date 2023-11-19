import React, { FC } from "react";
import { WSButtonStyle } from "./wsButton.style";
import { wsButtonType } from "./wsButtonType";

const WSButton: FC<wsButtonType> = ({
    children,
    border,
    backgroundColor,
    color,
}) => {
    return (
        <WSButtonStyle
            border={border}
            backgroundColor={backgroundColor}
            color={color}
        >
            {children}
        </WSButtonStyle>
    );
};

export default WSButton;
