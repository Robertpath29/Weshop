import React, { useState } from "react";
import {
    ContactGroup,
    ContainerArrowUserMenuStyle,
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
import UserMenu from "../UserMenu/UserMenu";

const Header = () => {
    const routeLogin = useNavigate();
    const user = useSelector((state: reducersType) => state.user);
    const [visibility, isVisibility] = useState(false);
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
                            <ContainerArrowUserMenuStyle>
                                <MdOutlineKeyboardArrowDown />
                            </ContainerArrowUserMenuStyle>
                        </LoginGroup>
                        <LoginGroup>
                            <span>USD</span>
                            <ContainerArrowUserMenuStyle>
                                <MdOutlineKeyboardArrowDown />
                            </ContainerArrowUserMenuStyle>
                        </LoginGroup>
                        {user.name ? (
                            <LoginGroup
                                onMouseOver={() => isVisibility(true)}
                                onMouseOut={() => isVisibility(false)}
                            >
                                <span>{user.name}</span>
                                <ContainerArrowUserMenuStyle>
                                    <MdOutlineKeyboardArrowDown />
                                    <UserMenu visibility={visibility} />
                                </ContainerArrowUserMenuStyle>
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
