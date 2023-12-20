import React from "react";
import {
    ContainerModeratorPanelStyle,
    ModeratorPanelStyle,
} from "./moderatorPanel.style";
import Header from "../../components/Header/Header";

import FormModeratorPanel from "../../components/FormModeratorPanel/FormModeratorPanel";

const ModeratorPanel = () => {
    return (
        <ModeratorPanelStyle>
            <Header />
            <ContainerModeratorPanelStyle>
                <h1>Add new product:</h1>
                <FormModeratorPanel />
            </ContainerModeratorPanelStyle>
        </ModeratorPanelStyle>
    );
};

export default ModeratorPanel;
