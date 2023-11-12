import styled from "styled-components";
import { theme } from "../../../style/theme.style";
import { lighten } from "polished";

export const WSButtonStyle = styled.button`
    padding: 15px 45px;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-family: ${() => theme.fonts.main};
    background-color: ${() => theme.color.main};
    border: none;
    color: ${() => theme.color.base};
    transition: all 0.3s;
    &:hover {
        background-color: ${() => lighten(0.1, theme.color.main)};
    }
    &:active {
        background-color: ${() => theme.color.main};
    }
`;
