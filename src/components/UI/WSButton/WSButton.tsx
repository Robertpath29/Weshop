import React, { FC } from "react";
import { WSButtonStyle } from "./wsButton.style";
import { wsButtonType } from "./wsButtonType";

const WSButton: FC<wsButtonType> = ({
    children,
    border,
    backgroundColor,
    color,
    maxWidth,
    upper,
    onClick,
}) => {
    return (
        <WSButtonStyle
            $border={border}
            $backgroundColor={backgroundColor}
            $color={color}
            $upper={upper ? upper.toString() : undefined}
            $maxWidth={maxWidth}
            onClick={onClick}
        >
            {children}
        </WSButtonStyle>
    );
};

export default WSButton;
