import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const WSBtnBasketStyle = styled.div<{
    $active: boolean;
}>`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid ${({ $active }) => ($active ? "none" : theme.color.main)};

    background-color: ${({ $active }) =>
        $active ? theme.color.main : "transparent"};
`;

export const ContainerBtnStyle = styled.div<{ $active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 5px 7px;
    overflow: ${({ $active }) => ($active ? "visible" : "hidden")};
    & > svg {
        font-size: 1.3rem;
        color: ${({ $active }) => ($active ? "white" : "black")};
    }
    &::before {
        display: ${({ $active }) => ($active ? "none" : "block")};
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: ${() => theme.color.main};
        transform: rotate(45deg);
        top: -5px;
        left: -5px;
    }
`;
export const ContainerBtnTxtStyle = styled.div<{ $active: boolean }>`
    height: 100%;
    width: ${({ $active }) => ($active ? "130px" : "0")};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: ${({ $active }) => ($active ? "-130px" : "0")};
    background-color: ${() => theme.color.main};
    border-right: ${({ $active }) => ($active ? "1px solid gray" : "none")};
    color: ${() => theme.color.base};
    transition: all 0.3s;
    overflow: hidden;
    white-space: nowrap;
`;
export const TextStyle = styled.span``;
export const ContainerPriceStyle = styled.div`
    width: max-content;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    color: ${() => theme.color.base};
    background-color: ${() => theme.color.main};
    & > span {
        margin: 0 10px;
    }
`;
