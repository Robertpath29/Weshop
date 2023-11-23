import React, { FC, useState } from "react";
import {
    DiscountGroupStyle,
    HrGroupStyle,
    NavMenuContainerStyle,
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
    return (
        <NavMenuStyle
            $men={men}
            $menuVisibility={menuVisibility}
            onMouseOut={() => {
                setMenVisibility(false);
            }}
        >
            <NavMenuContainerStyle $men={men} $menuVisibility={menuVisibility}>
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
            </NavMenuContainerStyle>
        </NavMenuStyle>
    );
};

export default NavMenu;
