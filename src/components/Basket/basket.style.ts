import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const BasketStyle = styled.div`
    width: 95px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${() => theme.color.base};
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

    &::after {
        content: "2";
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
    }
`;
