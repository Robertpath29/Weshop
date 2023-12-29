import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const StarsRatingStyle = styled.div`
    width: max-content;
    display: flex;
    position: relative;
    line-height: 0;
    overflow: hidden;
    margin-bottom: 3px;
`;
export const StatusStyle = styled.div<{ $statusRating: number }>`
    position: absolute;
    width: ${({ $statusRating }) => $statusRating + "%"};
    height: 25px;
    z-index: 0;
    background-color: ${() => theme.color.main};
`;
