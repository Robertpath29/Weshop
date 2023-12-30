import React, { FC } from "react";
import { HistoryNavStyle } from "./historyNav.style";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const HistoryNav: FC<{ colorBackground?: string }> = ({ colorBackground }) => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <HistoryNavStyle $colorBackground={colorBackground}>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                {pathnames.map((name, index) => {
                    let numberLength = 0;
                    if (Number(pathnames[pathnames.length - 1])) {
                        numberLength = 2;
                        if (name === pathnames[pathnames.length - 1]) return;
                    } else {
                        numberLength = 1;
                    }
                    const lastElem = index === pathnames.length - numberLength;

                    return (
                        <li key={name}>
                            <IoIosArrowForward />
                            {lastElem ? (
                                <span>
                                    {decodeURIComponent(
                                        name[0].toUpperCase() + name.slice(1)
                                    )}
                                </span>
                            ) : (
                                <>
                                    <Link
                                        to={`/${pathnames
                                            .slice(0, index + 1)
                                            .join("/")}`}
                                    >
                                        {decodeURIComponent(
                                            name[0].toUpperCase() +
                                                name.slice(1)
                                        )}
                                    </Link>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </HistoryNavStyle>
    );
};

export default HistoryNav;
