import styled from "styled-components";
import { theme } from "../../../../../style/theme.style";

export const ProductDisplayOptionStyle = styled.div`
    display: flex;
`;

export const ViewStyle = styled.button<{ $active: boolean }>`
    margin-right: 10px;
    padding: 0;
    cursor: pointer;
    border: none;
    background: transparent;
    &:hover {
        & > svg {
            color: ${() => theme.color.main};
        }
    }
    & > svg {
        font-size: 1.6rem;
        color: ${({ $active }) =>
            $active ? theme.color.main : theme.color.navMenuLink};
    }
`;
