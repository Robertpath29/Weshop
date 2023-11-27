import React from "react";
import Header from "../../components/Header/Header";
import {
    FoundUsContainerStyle,
    FoundUsLinkStyle,
    NotFound404PageStyle,
    NotFoundContainerStyle,
    NotFoundTitleStyle,
} from "./notFound404.style";
import WSButton from "../../components/UI/WSButton/WSButton";
import { CgFacebook } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound404Page = () => {
    const routeHome = useNavigate();
    return (
        <NotFound404PageStyle>
            <Header />
            <NotFoundContainerStyle>
                <NotFoundTitleStyle>404</NotFoundTitleStyle>

                <WSButton
                    backgroundColor="transparent"
                    border={2}
                    color="black"
                    maxWidth={"350px"}
                    onClick={() => routeHome("/")}
                >
                    Back to home
                </WSButton>

                <FoundUsContainerStyle>
                    <span>Find us on</span>
                    <FoundUsLinkStyle
                        href="https://www.facebook.com/?locale=uk_UA"
                        target="blank"
                    >
                        <CgFacebook />
                    </FoundUsLinkStyle>
                    <FoundUsLinkStyle
                        href="https://twitter.com/?lang=uk"
                        target="blank"
                    >
                        <FaXTwitter />
                    </FoundUsLinkStyle>
                    <FoundUsLinkStyle
                        href="https://ua.linkedin.com"
                        target="blank"
                    >
                        <FaLinkedinIn />
                    </FoundUsLinkStyle>
                </FoundUsContainerStyle>
            </NotFoundContainerStyle>
        </NotFound404PageStyle>
    );
};

export default NotFound404Page;
