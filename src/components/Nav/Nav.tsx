import React, { useState } from "react";
import { NavGroup, NavStyle } from "./nav.style";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import NavMenu from "../NavMenu/NavMenu";

const Nav = () => {
    const [menuMenVisibility, setMenuMenVisibility] = useState(false);
    const [menuWomenVisibility, setMenuWomenVisibility] = useState(false);

    return (
        <NavStyle>
            <span>Home</span>
            <NavGroup>
                <span>Shop</span>
                <MdOutlineKeyboardArrowDown />
            </NavGroup>
            <NavGroup
                onMouseOver={() => {
                    setMenuWomenVisibility(false);
                    setMenuMenVisibility(true);
                }}
            >
                <span>Men</span>
                <NavMenu
                    men
                    menuVisibility={menuMenVisibility}
                    setMenVisibility={setMenuMenVisibility}
                />
                <MdOutlineKeyboardArrowDown />
            </NavGroup>
            <NavGroup
                onMouseOver={() => {
                    setMenuMenVisibility(false);
                    setMenuWomenVisibility(true);
                }}
            >
                <span>Women</span>
                <NavMenu
                    menuVisibility={menuWomenVisibility}
                    setMenVisibility={setMenuWomenVisibility}
                />
                <MdOutlineKeyboardArrowDown />
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
