import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const CarouselHeroStyle = styled.section`
    max-width: ${() => theme.size.globalWidth + "px"};
    position: relative;
    left: 50%;
    transform: translate(-50%);
    user-select: none;
    .imagesSlide {
        width: ${() => theme.size.globalWidth + "px"};
        height: 800px;
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

export const TitleStyle = styled.div`
    user-select: none;
    position: absolute;
    z-index: 2;
    top: 40%;
    left: 10%;
`;
export const Title = styled.h1`
    margin: 0;
    font-size: 3rem;
    text-transform: uppercase;
`;
export const SubTitle = styled.h3`
    margin: 0;
    margin-bottom: 50px;
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 400;
    & > span {
        color: ${() => theme.color.main};
    }
`;

export const StandardBanner = styled.img`
    width: ${() => theme.size.globalWidth + "px"};
`;
