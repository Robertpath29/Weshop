import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const BasketStyle = styled.div`
    position: relative;
`;

export const ContainerIcon = styled.div`
    position: relative;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    border: 1px solid ${() => theme.color.base};
    border-radius: 50%;
`;

export const BtnBasketStyle = styled.div<{ $isProduct: boolean }>`
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({ $isProduct }) => ($isProduct ? "pointer" : "auto")};
    & > span {
        margin-left: 10px;
    }
    color: ${() => theme.color.base};
`;

export const NumberCountBasketStyle = styled.span`
    position: absolute;
    top: -3px;
    right: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    font-size: 0.75rem;
    background-color: ${() => theme.color.base};
    border-radius: 50%;
    color: ${() => theme.color.main};
`;
