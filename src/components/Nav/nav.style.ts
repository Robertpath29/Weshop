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

export const ContainerArrowNavStyle = styled.div<{ $visibility?: boolean }>`
    display: flex;
    align-items: center;
    position: relative;
    &::before {
        display: ${(props) => (props.$visibility ? "block" : "none")};
        content: "";
        position: absolute;
        width: 500px;
        height: 20px;
        top: 15px;
        left: -206px;
        background-color: ${() => theme.color.main};
        cursor: auto;
    }
    &::after {
        opacity: ${(props) => (props.$visibility ? "1" : "0")};
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: ${() => theme.color.base};
        transform: rotate(45deg);
        top: 25px;
        left: -2px;
        cursor: auto;
        transition: all 0.3s;
    }
`;
