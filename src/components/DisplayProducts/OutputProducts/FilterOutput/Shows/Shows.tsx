import React from "react";
import { ShowsStyle } from "./shows.style";

const Shows = () => {
    return (
        <ShowsStyle>
            <span>Shows:</span>
            <select defaultValue="12" onChange={(e) => {}}>
                <option value="12">12</option>
                <option value="9">9</option>
                <option value="6">6</option>
            </select>
        </ShowsStyle>
    );
};

export default Shows;
