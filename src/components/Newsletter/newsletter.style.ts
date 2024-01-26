import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const NewsletterStyle = styled.section``;
export const ContainerNewsletterStyle = styled.section`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
`;
export const ContainerTrendingRatedUpdatedStyle = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const ContainerNewsletterFeedback = styled.div``;

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
