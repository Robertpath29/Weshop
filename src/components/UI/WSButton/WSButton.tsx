import React, { FC } from "react";
import { WSButtonStyle } from "./wsButton.style";
import { wsButtonType } from "./wsButtonType";

const WSButton: FC<wsButtonType> = ({ children }) => {
    return <WSButtonStyle>{children}</WSButtonStyle>;
};

export default WSButton;
