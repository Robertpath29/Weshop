import React, { useState } from "react";
import { ContainerArrowNavStyle, NavGroup, NavStyle } from "./nav.style";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import NavMenu from "../NavMenu/NavMenu";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const [menuMenVisibility, setMenuMenVisibility] = useState(false);
    const [menuWomenVisibility, setMenuWomenVisibility] = useState(false);
    const routeHome = useNavigate();

    return (
        <NavStyle>
            <span onClick={() => routeHome("/")}>Home</span>
            <NavGroup>
                <span>Shop</span>
                <MdOutlineKeyboardArrowDown />
            </NavGroup>
            <NavGroup
                onMouseOver={() => {
                    setMenuWomenVisibility(false);
                    setMenuMenVisibility(true);
                }}
                onMouseOut={() => {
                    setMenuMenVisibility(false);
                }}
            >
                <span>Men</span>
                <NavMenu
                    men
                    menuVisibility={menuMenVisibility}
                    setMenVisibility={setMenuMenVisibility}
                />
                <ContainerArrowNavStyle $visibility={menuMenVisibility}>
                    <MdOutlineKeyboardArrowDown />
                </ContainerArrowNavStyle>
            </NavGroup>
            <NavGroup
                onMouseOver={() => {
                    setMenuMenVisibility(false);
                    setMenuWomenVisibility(true);
                }}
                onMouseOut={() => {
                    setMenuWomenVisibility(false);
                }}
            >
                <span>Women</span>
                <NavMenu
                    menuVisibility={menuWomenVisibility}
                    setMenVisibility={setMenuWomenVisibility}
                />
                <ContainerArrowNavStyle $visibility={menuWomenVisibility}>
                    <MdOutlineKeyboardArrowDown />
                </ContainerArrowNavStyle>
            </NavGroup>
            <NavGroup>
                <span>Page</span>
                <MdOutlineKeyboardArrowDown />
            </NavGroup>
            <span>Blog</span>
            <span>Contact us</span>
        </NavStyle>
    );
};

export default Nav;
