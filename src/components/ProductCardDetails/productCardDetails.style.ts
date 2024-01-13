import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const ProductCardDetailsStyle = styled.div`
    background-color: ${() => theme.color.mensTShirtBackground};
`;
export const ContainerProductCardDetailsStyle = styled.div`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 80px;
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

export const ContainerInputStyle = styled.div`
    display: flex;
    margin-top: 40px;
    gap: 30px;
`;

export const ContainerButtonStyle = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 50px;
    & > button {
        padding: 10px 15px;
        background-color: transparent;
        color: ${() => theme.color.main};
        border: 2px solid ${() => theme.color.main};
        &:hover {
            background-color: ${() => theme.color.main};
            color: ${() => theme.color.base};
        }
    }
`;

export const ContainerShareStyle = styled.div`
    margin-top: 50px;
    & > span {
        width: max-content;
        display: block;
        position: relative;
        color: ${() => theme.color.navMenuLink};
        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 1px;
            bottom: -10px;
            left: 0;
            background-color: ${() => theme.color.main};
        }
    }
`;

export const ContainerIconShareStyle = styled.div`
    margin-top: 40px;
    display: flex;
    gap: 25px;
    position: relative;
    left: -6px;
    & > a {
        font-size: 1.5rem;
        color: ${() => theme.color.navMenuLink};
        &:hover {
            color: ${() => theme.color.main};
        }
    }
`;
