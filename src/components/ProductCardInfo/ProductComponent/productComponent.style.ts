import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const ProductComponentStyle = styled.div`
    margin-bottom: 30px;
    & > h1 {
        color: ${() => theme.color.main};
        font-size: 1.2rem;
    }
`;

export const DynamicSliderStyle = styled.div`
    width: 100%;
    height: 10px;
    background-color: ${() => theme.color.mensTShirtBackground};
`;

export const SliderStyle = styled.div<{ $percent: string }>`
    position: relative;
    min-width: 20%;
    width: ${({ $percent }) => $percent + "%"};
    height: 100%;
    background-color: ${() => theme.color.main};
    &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        background-color: ${() => theme.color.main};
        right: 6px;
        top: -5px;
    }

    &::after {
        content: "${({ $percent }) => $percent + "%"}";
        position: absolute;
        width: 10px;
        height: 10px;
        color: ${() => theme.color.main};
        right: 10px;
        top: -35px;
        font-weight: bold;
    }
`;
