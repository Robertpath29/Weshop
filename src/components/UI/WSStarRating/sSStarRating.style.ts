import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const WSStarRatingStyle = styled.div<{ $changeRating: boolean }>`
    width: 23px;
    height: 23px;
    position: relative;
    z-index: 5;
    fill: red;
    stroke: red;
    stroke-width: 100px;
    cursor: ${({ $changeRating }) => ($changeRating ? "pointer" : "auto")};
    transition: all 0.3s;
    &:hover {
        transform: ${({ $changeRating }) =>
            $changeRating ? "scale(1.2)" : "scale(1.0)"};
    }
    & > img {
        width: 100%;
        height: 100%;
    }
    & > svg {
        position: absolute;
        left: 1px;
        top: 0;
        font-size: 1.3rem;
        color: ${() => theme.color.main};
    }
`;
