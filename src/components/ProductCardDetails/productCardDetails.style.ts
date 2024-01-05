import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const ProductCardDetailsStyle = styled.div`
    background-color: ${() => theme.color.mensTShirtBackground};
`;
export const ContainerProductCardDetailsStyle = styled.div`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    padding-top: 70px;
    display: flex;
`;
export const ContainerImagesStyle = styled.div``;
export const ContainerInfoStyle = styled.div`
    width: 100%;
    padding-top: 40px;
    margin-left: 30px;
    & > h1 {
        font-size: 1rem;
    }
    & > hr {
        margin: 30px 0;
    }
    p {
        color: ${() => theme.color.navMenuLink};
    }
`;

export const PriceContainerStyle = styled.div`
    color: ${() => theme.color.main};
    font-size: 2rem;
`;
export const PriceStyle = styled.span``;
export const OldPriceStyle = styled.span`
    text-decoration: line-through;
`;

export const ContainerStarsStyle = styled.div`
    display: flex;
`;
export const NumberRatingStyle = styled.span`
    margin-left: 10px;
    color: ${() => theme.color.main};
`;

export const ContainerReviewStyle = styled.div`
    display: flex;
    margin-top: 20px;
    & > hr {
        height: 20px;
        margin: 0 40px;
    }
`;

export const ReviewStyle = styled.span`
    color: ${() => theme.color.navMenuLink};
    cursor: pointer;
    &:hover {
        color: ${() => theme.color.main};
    }
`;
