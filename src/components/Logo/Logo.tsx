import React from "react";
import { LogoStyle } from "./logo.style";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const routeHome = useNavigate();
    return (
        <LogoStyle
            onClick={() => {
                routeHome("/");
            }}
        >
            <span>weshop</span>
        </LogoStyle>
    );
};

export default Logo;
