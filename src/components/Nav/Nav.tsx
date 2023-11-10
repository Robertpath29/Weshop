import React from "react";
import { NavGroup, NavStyle } from "./nav.style";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Nav = () => {
    return (
        <NavStyle>
            <span>Home</span>
            <NavGroup>
                <span>Shop</span>
                <MdOutlineKeyboardArrowDown />
            </NavGroup>
            <NavGroup>
                <span>Men</span>
                <MdOutlineKeyboardArrowDown />
            </NavGroup>
            <NavGroup>
                <span>Women</span>
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
