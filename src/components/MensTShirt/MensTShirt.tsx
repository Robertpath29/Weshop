import React from "react";
import { MensTShirtContainerStyle, MensTShirtStyle } from "./MensTShirt.style";
import MensTShirtCardsCollection from "../MensTShirtCardsCollection/MensTShirtCardsCollection";
import MensTShirtInformation from "../MensTShirtInformation/MensTShirtInformation";

const MensTShirt = () => {
    return (
        <MensTShirtStyle>
            <MensTShirtContainerStyle>
                <MensTShirtCardsCollection />
                <MensTShirtInformation />
            </MensTShirtContainerStyle>
        </MensTShirtStyle>
    );
};

export default MensTShirt;
