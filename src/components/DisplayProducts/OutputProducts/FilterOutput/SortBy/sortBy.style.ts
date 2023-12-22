import styled from "styled-components";
import { theme } from "../../../../../style/theme.style";

export const SortByStyle = styled.div`
    span {
        color: ${() => theme.color.navMenuLink};
        margin-right: 25px;
    }
    select {
        cursor: pointer;
        border: none;
        color: ${() => theme.color.navMenuLink};
        font-size: 1rem;
    }
`;
