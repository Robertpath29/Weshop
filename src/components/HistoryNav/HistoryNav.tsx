import React from "react";
import { HistoryNavStyle } from "./historyNav.style";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const HistoryNav = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <HistoryNavStyle>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                {pathnames.map((name, index) => (
                    <li key={name}>
                        <IoIosArrowForward />
                        <Link
                            to={`/${pathnames.slice(0, index + 1).join("/")}`}
                        >
                            {name[0].toUpperCase() + name.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </HistoryNavStyle>
    );
};

export default HistoryNav;
