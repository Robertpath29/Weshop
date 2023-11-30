import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const UserMenuStyle = styled.div<{
    $visibility: boolean;
}>`
    width: 90px;

    height: ${(props) => (props.$visibility ? "80px" : "0")};
    position: absolute;
    display: flex;
    align-items: end;
    justify-content: center;
    top: 15px;
    left: -30px;
    background-color: ${() => theme.color.base};
    color: black;
    overflow: hidden;
    cursor: auto;
    transition: all 0.3s;
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

export const ContainerLogOut = styled.div`
    display: flex;
    align-items: center;
    color: ${() => theme.color.navMenuLink};
    cursor: pointer;
    user-select: none;
    margin-bottom: 5px;
    &:hover {
        color: ${() => theme.color.main};
    }
    & > svg {
        font-size: 1.8rem;
    }
    & > span {
        font-size: 0.9rem;
    }
`;
