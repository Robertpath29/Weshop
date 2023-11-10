import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const NavStyle = styled.nav`
    width: 580px;
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    font-size: 0.8rem;
    color: ${() => theme.color.base};
    user-select: none;
    & > span {
        cursor: pointer;
    }
`;

export const NavGroup = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    & > span {
        margin-right: 6px;
    }
`;
