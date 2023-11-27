import React, { FC } from "react";
import { ErrorMessageStyle } from "./errorMessage.style";
import { errorMessageType } from "./errorMessageType";

const ErrorMessage: FC<errorMessageType> = ({ message }) => {
    return <ErrorMessageStyle>{message}</ErrorMessageStyle>;
};

export default ErrorMessage;
