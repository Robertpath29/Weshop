import React from "react";
import { MensTShirtContainerStyle, MensTShirtStyle } from "./MensTShirt.style";
import MensTShirtCardsCollection from "../MensTShirtCardsCollection/MensTShirtCardsCollection";
import MensTShirtInformation from "../MensTShirtInformation/MensTShirtInformation";
import MensTShirtLifestyle from "../MensTShirtLifestyle/MensTShirtLifestyle";

const MensTShirt = () => {
    return (
        <MensTShirtStyle>
            <MensTShirtContainerStyle>
                <MensTShirtCardsCollection />
                <MensTShirtInformation />
                <MensTShirtLifestyle />
            </MensTShirtContainerStyle>
        </MensTShirtStyle>
    );
};

export default MensTShirt;
