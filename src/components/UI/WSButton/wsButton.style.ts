import styled from "styled-components";
import { theme } from "../../../style/theme.style";
import { lighten } from "polished";

export const WSButtonStyle = styled.button<{
    $border?: number;
    $backgroundColor?: string;
    $color?: string;
    $maxWidth?: string;
    $upper?: string;
}>`
    max-width: ${(props) =>
        props.$maxWidth ? props.$maxWidth : "max-content"};
    width: 100%;
    padding: 15px 45px;
    position: relative;
    text-transform: ${(props) => (props.$upper ? "uppercase" : "none")};
    font-size: 0.9rem;
    z-index: 5;
    font-family: ${() => theme.fonts.main};
    background-color: ${(props) =>
        props.$backgroundColor ? props.$backgroundColor : theme.color.main};
    border: ${(props) =>
        props.$border ? props.$border + "px solid black" : "none"};
    color: ${(props) => (props.$color ? props.$color : theme.color.base)};
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        background-color: ${() => lighten(0.1, theme.color.main)};
    }
    &:active {
        background-color: ${() => theme.color.main};
    }
`;
