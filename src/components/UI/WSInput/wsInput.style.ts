import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const WSInputStyle = styled.input<{ $errorBorder?: string }>`
    outline: none;
    width: 100%;
    max-width: 300px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
    border: 1px solid
        ${(props) => (props.$errorBorder ? "red" : theme.color.main)};
    color: ${() => theme.color.main};
`;