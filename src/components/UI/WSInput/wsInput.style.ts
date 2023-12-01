import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const WSInputStyle = styled.input<{
    $errorBorder?: string;
    $disabled?: boolean;
}>`
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

export const ContainerInputStyle = styled.div<{ $disabled?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    & > label {
        font-size: 1.2rem;
        margin-right: 20px;
        color: ${(props) => (props.$disabled ? "gray" : "black")};
    }
    & > input {
        border: 1px solid
            ${(props) => (props.$disabled ? "gray" : theme.color.main)};
        cursor: ${(props) => (props.$disabled ? "not-allowed" : "auto")};
    }
`;
