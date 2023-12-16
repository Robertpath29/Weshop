import React, { FC, useEffect, useRef } from "react";
import { ContainerMenuStyle, UserMenuStyle } from "./userMenu.style";
import { IoLogOutOutline } from "react-icons/io5";
import { userMenuType } from "./userMenu.types";
import { logOut } from "../../api/logOut/logOut";
import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducer/combineReducer";
import { IoSettingsOutline } from "react-icons/io5";
import { AiFillControl } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const UserMenu: FC<userMenuType> = ({ visibility }) => {
    const { deleteCurrent_user } = useAction();
    const current_user = useSelector((state: reducersType) => state.user);
    const routeSettingUser = useNavigate();
    const routeAdminPanel = useNavigate();
    const routeHome = useNavigate();
    const userMenuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (userMenuRef.current) {
            const contentHeight = userMenuRef.current.scrollHeight;
            userMenuRef.current.style.height = visibility
                ? `${contentHeight}px`
                : "0";
        }
    }, [visibility]);
    return (
        <UserMenuStyle $visibility={visibility} ref={userMenuRef}>
            <ContainerMenuStyle>
                <IoSettingsOutline />
                <span
                    onClick={() => {
                        routeSettingUser("/user/setting");
                    }}
                >
                    Settings
                </span>
            </ContainerMenuStyle>
            {current_user.role === "admin" && (
                <ContainerMenuStyle>
                    <RiAdminFill />
                    <span
                        onClick={() => {
                            routeAdminPanel("/admin/panel");
                        }}
                    >
                        Admin panel
                    </span>
                </ContainerMenuStyle>
            )}
            {current_user.role === "admin" ||
            current_user.role === "moderator" ? (
                <ContainerMenuStyle>
                    <AiFillControl />
                    <span
                        onClick={() => {
                            routeAdminPanel("/moderator/panel");
                        }}
                    >
                        Moderator panel
                    </span>
                </ContainerMenuStyle>
            ) : undefined}

            <ContainerMenuStyle>
                <IoLogOutOutline />
                <span
                    onClick={() => {
                        logOut(deleteCurrent_user, current_user);
                        routeHome("/");
                    }}
                >
                    LogOut
                </span>
            </ContainerMenuStyle>
        </UserMenuStyle>
    );
};

export default UserMenu;
