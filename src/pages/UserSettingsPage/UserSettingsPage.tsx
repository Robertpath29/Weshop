import React, { useState } from "react";
import {
    ContainerUserSettingsStyle,
    UserSettingsPageStyle,
} from "./userSettingsPage.style";
import Header from "../../components/Header/Header";
import UpdateUserForm from "../../components/UpdateUserForm/UpdateUserForm";
import {
    ContainerSettingsMenu,
    DisplaySettingsStyle,
    SettingName,
} from "../../components/UpdateUserForm/updateUserForm.style";
import PasswordUserForm from "../../components/UpdateUserForm/PasswordUserForm/PasswordUserForm";

const UserSettingsPage = () => {
    const [activePersonalSettings, isPersonalSettings] = useState(false);
    const [activeChangePassword, isChangePassword] = useState(false);
    const [display, setDisplay] = useState(<></>);

    const clearActive = () => {
        isPersonalSettings(false);
        isChangePassword(false);
        setDisplay(<></>);
    };

    return (
        <UserSettingsPageStyle>
            <Header />
            <ContainerUserSettingsStyle>
                <ContainerSettingsMenu>
                    <SettingName
                        $active={activePersonalSettings}
                        onClick={() => {
                            clearActive();
                            isPersonalSettings(true);
                            setDisplay(<UpdateUserForm />);
                        }}
                    >
                        Personal settings
                    </SettingName>
                    <SettingName
                        $active={activeChangePassword}
                        onClick={() => {
                            clearActive();
                            isChangePassword(true);
                            setDisplay(<PasswordUserForm />);
                        }}
                    >
                        Change password
                    </SettingName>
                </ContainerSettingsMenu>
                <hr />
                <DisplaySettingsStyle>{display}</DisplaySettingsStyle>
            </ContainerUserSettingsStyle>
        </UserSettingsPageStyle>
    );
};

export default UserSettingsPage;
