import React, { FC } from "react";
import { ShowsStyle } from "./shows.style";

const Shows: FC<{
    setPerPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setPerPage }) => {
    return (
        <ShowsStyle>
            <span>Shows:</span>
            <select
                defaultValue={12}
                onChange={(e) => {
                    setPerPage(Number(e.target.value));
                }}
            >
                <option value={12}>12</option>
                <option value={9}>9</option>
                <option value={6}>6</option>
            </select>
        </ShowsStyle>
    );
};

export default Shows;
