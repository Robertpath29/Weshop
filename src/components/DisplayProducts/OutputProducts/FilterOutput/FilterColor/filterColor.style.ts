import styled from "styled-components";
import { theme } from "../../../../../style/theme.style";

export const FilterColorStyle = styled.div`
    display: flex;
`;
export const ColorStyle = styled.div<{ $color: string }>`
    margin-top: 5px;
    margin-right: 10px;
    width: 18px;
    height: 15px;
    border: 1px solid ${() => theme.color.navMenuLink};
    background-color: ${({ $color }) => $color};
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.3);
    }
`;
