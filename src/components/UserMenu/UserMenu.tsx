import React, { FC } from "react";
import { ContainerLogOut, UserMenuStyle } from "./userMenu.style";
import { IoLogOutOutline } from "react-icons/io5";
import { userMenuType } from "./userMenu.types";
import { logOut } from "../../api/logOut/logOut";
import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducer/combineReducer";

const UserMenu: FC<userMenuType> = ({ visibility }) => {
    const { deleteCurrent_user } = useAction();
    const current_user = useSelector((state: reducersType) => state.user);
    return (
        <UserMenuStyle $visibility={visibility}>
            <ContainerLogOut>
                <IoLogOutOutline />
                <span onClick={() => logOut(deleteCurrent_user, current_user)}>
                    LogOut
                </span>
            </ContainerLogOut>
        </UserMenuStyle>
    );
};

export default UserMenu;
