import React from "react";
import {
    ContainerUserSettingsStyle,
    UserSettingsPageStyle,
} from "./userSettingsPage.style";
import Header from "../../components/Header/Header";

const UserSettingsPage = () => {
    return (
        <UserSettingsPageStyle>
            <Header />
            <ContainerUserSettingsStyle></ContainerUserSettingsStyle>
        </UserSettingsPageStyle>
    );
};

export default UserSettingsPage;
