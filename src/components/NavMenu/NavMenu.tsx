import React, { FC, useEffect, useRef, useState } from "react";
import {
    DiscountGroupStyle,
    HrGroupStyle,
    NavMenuStyle,
    SunglassesGroupStyle,
    TopGroupStyle,
    WinterGroupStyle,
} from "./navMenu.style";
import { navMenuType } from "./navMenuType";

const NavMenu: FC<navMenuType> = ({
    men,
    menuVisibility,
    setMenVisibility,
}) => {
    const [top, setTop] = useState([
        "Tops & Tees",
        "Shirts",
        "Suits & Blazer",
        "Hoodies & Sweatshirts",
        "Coats & Jackets",
        "Sweaters",
        "Bottoms",
        "Pants",
    ]);
    const [winter, setWinter] = useState([
        "Down Jackets",
        "Jackets",
        "Parkas",
        "Leather & Suede",
        "Printed Hoodies",
        "Suits",
    ]);
    const [sunglasses, setSunglasses] = useState([
        "Pilot",
        "Wayfarer",
        "Square",
        "Round",
        "Oval",
        "Jackets",
        "Parkas",
        "Leather & Suede",
    ]);

    const userMenuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (userMenuRef.current) {
            const contentHeight = userMenuRef.current.scrollHeight;
            userMenuRef.current.style.height = menuVisibility
                ? `${contentHeight + 80}px`
                : "0";
        }
    }, [menuVisibility]);
    return (
        <NavMenuStyle
            $men={men}
            $menuVisibility={menuVisibility}
            onMouseOut={() => {
                setMenVisibility(false);
            }}
            ref={userMenuRef}
        >
            <TopGroupStyle>
                <h1>TOP</h1>
                <HrGroupStyle>
                    <hr />
                </HrGroupStyle>
                {top.map((name, kay) => (
                    <span key={kay}>{name}</span>
                ))}
            </TopGroupStyle>
            <WinterGroupStyle>
                <h1>Winter Style</h1>
                <HrGroupStyle>
                    <hr />
                </HrGroupStyle>
                {winter.map((name, kay) => (
                    <span key={kay}>{name}</span>
                ))}
            </WinterGroupStyle>
            <DiscountGroupStyle $men={men}>
                <h2>50% OFF</h2>
            </DiscountGroupStyle>
            <SunglassesGroupStyle>
                <h1>Sunglasses</h1>
                <HrGroupStyle>
                    <hr />
                </HrGroupStyle>
                {sunglasses.map((name, kay) => (
                    <span key={kay}>{name}</span>
                ))}
            </SunglassesGroupStyle>
        </NavMenuStyle>
    );
};

export default NavMenu;
