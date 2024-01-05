import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const CarouselProductDetailsStyle = styled.div`
    width: 600px;
    height: max-content;
    position: relative;

    .imagesSlideProduct {
        position: relative;
        top: 4px;
        width: 100%;
    }
    & > button {
    }
`;
export const ContainerBtnStyle = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    z-index: 111;
    top: 862px;

    right: 0;

    .SlideProductPrevButton,
    .SlideProductNextButton {
        width: 40px;
        height: 40px;
        margin-left: 3px;
        border: 1px solid ${() => theme.color.main};
        background-color: rgba(255, 255, 255, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${() => theme.color.main};
        cursor: pointer;
        & > svg {
            font-size: 2rem;
            font-weight: bold;
        }
        &:hover {
            background-color: ${() => theme.color.main};
            color: ${() => theme.color.base};
        }
    }
`;
