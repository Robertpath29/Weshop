import React from "react";
import {
    ContactGroup,
    ContainerContact,
    ContainerGroupLogin,
    ContainerHeader,
    ContainerLogin,
    ContainerLogo,
    ContainerNav,
    HeaderStyle,
    LoginGroup,
} from "./header.style";
import Logo from "../Logo/Logo";
import { BsFillTelephoneFill } from "react-icons/bs/";
import { AiOutlineMail } from "react-icons/ai";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Basket from "../Basket/Basket";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducer/combineReducer";

const Header = () => {
    const routeLogin = useNavigate();
    const user = useSelector((state: reducersType) => state.user);
    return (
        <HeaderStyle>
            <ContainerHeader>
                <ContainerLogo>
                    <ContainerContact>
                        <ContactGroup>
                            <BsFillTelephoneFill />
                            <span>(00)-123-456-789</span>
                        </ContactGroup>
                        <ContactGroup>
                            <AiOutlineMail />
                            <span>weshop@gmail.com</span>
                        </ContactGroup>
                    </ContainerContact>
                    <Logo />
                </ContainerLogo>
                <ContainerNav>
                    <Search />
                    <Nav />
                </ContainerNav>
                <ContainerLogin>
                    <ContainerGroupLogin>
                        <LoginGroup>
                            <span>English</span>
                            <MdOutlineKeyboardArrowDown />
                        </LoginGroup>
                        <LoginGroup>
                            <span>USD</span>
                            <MdOutlineKeyboardArrowDown />
                        </LoginGroup>
                        {user.name ? (
                            <LoginGroup>
                                <span>{user.name}</span>
                                <MdOutlineKeyboardArrowDown />
                            </LoginGroup>
                        ) : (
                            <span
                                onClick={() => {
                                    routeLogin("/login");
                                }}
                            >
                                Login
                            </span>
                        )}
                    </ContainerGroupLogin>
                    <Basket />
                </ContainerLogin>
            </ContainerHeader>
        </HeaderStyle>
    );
};

export default Header;
