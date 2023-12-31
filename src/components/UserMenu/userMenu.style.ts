import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const UserMenuStyle = styled.div<{
    $visibility: boolean;
}>`
    width: 120px;
    height: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 11;
    top: 15px;
    right: -20px;
    background-color: ${() => theme.color.base};
    color: black;
    overflow: hidden;
    cursor: auto;
    transition: height 0.3s;
    & > :first-child {
        margin-top: 15px;
    }
    &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: ${() => theme.color.base};
        top: 5px;
        right: 20px;
        transform: rotate(45deg);
        z-index: 1;
    }
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 10px;
        top: 0;
        background-color: ${() => theme.color.main};
    }
`;
export const ContainerMenuStyle = styled.div`
    display: flex;
    align-items: center;
    color: ${() => theme.color.navMenuLink};
    cursor: pointer;
    user-select: none;
    margin-bottom: 5px;
    margin-left: 5px;
    &:hover {
        color: ${() => theme.color.main};
    }
    & > svg {
        font-size: 1.8rem;
        margin-right: 3px;
    }
    & > span {
        font-size: 0.9rem;
    }
`;
