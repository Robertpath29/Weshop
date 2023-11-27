import React, { FC } from "react";
import {
    ContainerBtnStyle,
    FlashMessageStyle,
    MessageGroupStyle,
} from "./flashMessage.style";
import { flashMessageType } from "./flashMessageType";
import { HiCheck } from "react-icons/hi";
import WSButton from "../UI/WSButton/WSButton";
import { useNavigate } from "react-router-dom";

const FlashMessage: FC<flashMessageType> = ({ message, route }) => {
    const routes = useNavigate();
    return (
        <FlashMessageStyle>
            <MessageGroupStyle>
                <p>{message}</p>
                <HiCheck />
            </MessageGroupStyle>
            <ContainerBtnStyle>
                <WSButton
                    onClick={(e) => {
                        e.preventDefault();
                        routes(route);
                    }}
                    upper
                    maxWidth="100%"
                >
                    ok
                </WSButton>
            </ContainerBtnStyle>
        </FlashMessageStyle>
    );
};

export default FlashMessage;
