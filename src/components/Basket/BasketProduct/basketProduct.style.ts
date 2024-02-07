import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const BasketProductStyle = styled.div<{ $activeBasket: boolean }>`
    position: absolute;
    height: 0;
    overflow: ${({ $activeBasket }) => ($activeBasket ? "visible" : "hidden")};
    overflow: hidden;
    left: -295px;
    top: 36px;
    background-color: ${() => theme.color.base};
    box-shadow: 0px 8px 10px ${() => theme.color.navMenuLink};
    transition: all 0.5s;
    &::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        top: 4px;
        right: 107px;
        background-color: white;
        transform: rotate(45deg);
        z-index: 1111;
    }
    &::after {
        content: "";
        position: absolute;
        top: -1px;
        width: 100%;
        height: 10px;
        background-color: ${() => theme.color.main};
    }
`;
export const ContainerBasketProductStyle = styled.div<{ $maxCount: boolean }>`
    margin: 60px 40px 0 40px;
    max-height: ${({ $maxCount }) => ($maxCount ? "400px" : "")};
    overflow: ${({ $maxCount }) => ($maxCount ? "scroll" : "")};
`;
export const ContainerBasketBtnStyle = styled.div`
    margin: 0px 40px 50px 40px;
    & > button {
        margin-top: 15px;
        border: 1px solid ${() => theme.color.main};
        &:hover {
            color: ${() => theme.color.main};
            border: 1px solid ${() => theme.color.main};
            background: transparent;
        }
    }
`;
