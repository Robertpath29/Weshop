import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const CarouselHeroStyle = styled.section`
    max-width: ${() => theme.size.globalWidth + "px"};
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    .imagesSlide {
        width: ${() => theme.size.globalWidth + "px"};
    }

    .SlideNextButton,
    .SlidePrevButton {
        position: absolute;
        display: flex;
        flex-direction: column;
        z-index: 10;
        top: 0;
        bottom: 0;
        background: transparent;
        justify-content: center;
        border: none;
        font-family: ${() => theme.fonts.main};
        font-size: 0.75rem;
        transition: all 0.3s;
        & > span {
            margin: 0 10px;
            margin-bottom: 10px;
        }
        &:hover {
            background-color: ${() => theme.color.main};
        }
    }
    .SlidePrevButton {
        left: 0;
    }
    .SlideNextButton {
        right: 0;
    }
`;
