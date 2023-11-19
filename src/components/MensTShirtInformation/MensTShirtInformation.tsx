import React from "react";
import {
    GroupStyle,
    MensTShirtInformationStyle,
    TextGroupStyle,
} from "./MensTShirtInformation.style";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";

const MensTShirtInformation = () => {
    return (
        <MensTShirtInformationStyle>
            <GroupStyle>
                <BiSupport />
                <TextGroupStyle>
                    <h1>24/7 HOUR SUPPORT</h1>
                    <p>
                        Our online support section is available and regularly
                        updated if you'd prefer.
                    </p>
                </TextGroupStyle>
            </GroupStyle>
            <GroupStyle>
                <TbTruckDelivery />
                <TextGroupStyle>
                    <h1>EASY SERVICE</h1>
                    <p>
                        Our online support section is available and regularly
                        updated if you'd prefer.
                    </p>
                </TextGroupStyle>
            </GroupStyle>
            <GroupStyle>
                <IoHomeOutline />
                <TextGroupStyle>
                    <h1>HOME DELIVERY</h1>
                    <p>
                        Our online support section is available and regularly
                        updated if you'd prefer.
                    </p>
                </TextGroupStyle>
            </GroupStyle>
        </MensTShirtInformationStyle>
    );
};

export default MensTShirtInformation;
