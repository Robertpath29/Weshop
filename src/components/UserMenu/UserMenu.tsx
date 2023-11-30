import React, { FC } from "react";
import { ContainerLogOut, UserMenuStyle } from "./userMenu.style";
import { IoLogOutOutline } from "react-icons/io5";
import { userMenuType } from "./userMenu.types";

const UserMenu: FC<userMenuType> = ({ visibility }) => {
    return (
        <UserMenuStyle $visibility={visibility}>
            <ContainerLogOut>
                <IoLogOutOutline />
                <span>LogOut</span>
            </ContainerLogOut>
        </UserMenuStyle>
    );
};

export default UserMenu;
