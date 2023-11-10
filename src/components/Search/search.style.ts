import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const SearchStyle = styled.div`
    width: 300px;
    display: flex;
    border-bottom: 1px solid ${() => theme.color.base};
    color: ${() => theme.color.base};
`;

export const InputStyle = styled.input`
    width: 100%;
    font-size: 0.75rem;
    background: transparent;
    border: none;
    outline: none;
    color: ${() => theme.color.base};
`;
