import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const ContainerCarouselRelatedItemsStyle = styled.div`
    .swiper {
        width: ${() => theme.size.globalWidth + 200 + "px"};
        padding: 0 100px;
        overflow: visible;
        &::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 10000px;
            top: 0;
            left: -9900px;
            background-color: white;
            z-index: 11;
        }
        &::after {
            content: "";
            position: absolute;
            height: 100%;
            width: 10000px;
            top: 0;
            right: -9900px;
            background-color: white;
            z-index: 11;
        }
    }
    & > h1 {
        width: 100%;
        margin: 0;
        margin-bottom: 60px;
        text-align: center;
        font-weight: 400;
    }

    .relatedItemsBtnNext {
        cursor: pointer;
        padding: 0;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 42%;
        right: -10px;
        z-index: 12;
        background-color: transparent;
        border: none;
        font-size: 3.5rem;
        border-radius: 50%;
        color: ${() => theme.color.main};
        transition: all 0.3s;
        &:hover {
            color: ${() => theme.color.base};
            background-color: ${() => theme.color.main};
        }
    }
    .relatedItemsBtnPrev {
        cursor: pointer;
        padding: 0;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 42%;
        left: -13px;
        z-index: 12;
        background-color: transparent;
        border: none;
        font-size: 3.5rem;
        border-radius: 50%;
        color: ${() => theme.color.main};
        transition: all 0.3s;
        &:hover {
            color: ${() => theme.color.base};
            background-color: ${() => theme.color.main};
        }
    }
`;

export const ContainerSlideStyle = styled.div`
    width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
`;
