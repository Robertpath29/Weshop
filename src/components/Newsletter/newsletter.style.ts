import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const NewsletterStyle = styled.section``;
export const ContainerNewsletterStyle = styled.section`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    margin-bottom: 50px;
`;
export const ContainerTrendingRatedUpdatedStyle = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const ContainerNewsletterFeedbackStyle = styled.div`
    margin-top: 100px;
    height: 360px;
    display: flex;
    justify-content: space-between;
    & > img {
        width: 48%;
        height: 100%;
    }
`;

export const ContainerInputBtnStyle = styled.div`
    width: 350px;
    z-index: 11;
    position: relative;
    & > input {
        max-width: 100%;
        background: transparent;
        border: 1px solid black;
    }
    & > button {
        position: absolute;
        height: 100%;
        background: transparent;
        border: none;
        right: 10px;
        cursor: pointer;
        &:hover {
            & > svg {
                color: ${() => theme.color.main};
            }
        }
        & > svg {
            color: black;
            font-size: 2rem;
            animation: arrowAnim 0.5s linear 0s infinite alternate;
        }
    }
    @keyframes arrowAnim {
        from {
            margin-right: 0px;
        }
        to {
            margin-right: 15px;
        }
    }
`;
export const ContainerFeedbackStyle = styled.div`
    position: relative;
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("/images/background_register.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: white;
        opacity: 0.5;
    }
    & > h1 {
        z-index: 11;
        font-size: 1.8rem;
        margin: 0;
        margin-bottom: 10px;
        text-transform: uppercase;
    }
    & > span {
        z-index: 11;
        color: ${() => theme.color.navMenuLink};
        margin-bottom: 40px;
    }
`;

export const TrendingGroupStyle = styled.div`
    width: 330px;
    & > h1 {
        position: relative;
        text-transform: uppercase;
        font-size: 1.1rem;
        margin-bottom: 60px;
        &::after {
            content: "";
            width: 50px;
            position: absolute;
            border-bottom: 2px solid ${() => theme.color.navMenuLink};
            bottom: -18px;
            left: 0;
        }
    }
`;
export const RatedGroupStyle = styled(TrendingGroupStyle)`
    & > h1 {
        text-align: center;
        &::after {
            left: 50%;
            transform: translate(-50%);
        }
    }
`;
export const UpdatedGroupStyle = styled(TrendingGroupStyle)`
    & > h1 {
        text-align: end;
        &::after {
            left: auto;
            right: 0;
        }
    }
`;

export const ContainerBtnStyle = styled.div`
    margin-top: 20px;
    width: 90px;
    display: flex;
    justify-content: space-between;
`;
export const ContainerBtnFavoritesStyle = styled.div`
    width: 36px;
`;
export const ContainerBtnBasketStyle = styled.div`
    width: 36px;
`;
