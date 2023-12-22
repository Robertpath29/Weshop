import styled from "styled-components";
import { theme } from "../../../../../style/theme.style";

export const ProductDisplayOptionStyle = styled.div`
    display: flex;
`;

export const ViewStyle = styled.div`
    margin-right: 10px;
    cursor: pointer;
    &:hover {
        & > svg {
            color: ${() => theme.color.main};
        }
    }
    & > svg {
        font-size: 1.6rem;
        color: ${() => theme.color.navMenuLink};
    }
`;
