import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const ProductCardStyle = styled.div<{ $prodDisplay: string }>`
    width: ${({ $prodDisplay }) =>
        $prodDisplay === "block" ? "245px" : "100%"};
    margin-top: 13px;
    margin-bottom: 5px;
    & > hr {
        margin: 40px 0;
    }
`;

export const ImagesStyle = styled.img`
    width: 100%;
    height: 100%;
`;

export const ContainerBlockStyle = styled.div`
    position: relative;

    height: 350px;
`;

export const ContainerListStyle = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
`;
export const ContainerImageStyle = styled.div`
    width: 250px;
    margin-right: 30px;
`;
export const ContainerInfoStyle = styled.div`
    width: 80%;
    & > h1 {
        margin: 0;
        font-size: 1.2rem;
        margin-bottom: 20px;
    }

    & > hr {
        margin: 25px 0 !important;
        width: 100px;
    }
    & > p {
        color: ${() => theme.color.navMenuLink};
    }
`;

export const PriceStyle = styled.span`
    font-size: 1.1rem;
    font-weight: bold;
    color: ${() => theme.color.main};
`;
export const OldPriceStyle = styled(PriceStyle)`
    text-decoration: line-through;
`;

export const ContainerPrice = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    color: ${() => theme.color.main};
`;

export const ContainerBlockBasketStyle = styled.div`
    width: 36px;
    position: absolute;
    right: 0;
    bottom: 40px;
`;

export const ContainerBlockFavoritesStyle = styled(ContainerBlockBasketStyle)`
    bottom: 100px;
`;
export const ContainerBlockViewStyle = styled(ContainerBlockBasketStyle)`
    bottom: 160px;
`;

export const ContainerGroupBtnStyle = styled.div`
    display: flex;
    margin-top: 40px;
`;

export const ContainerListBasketStyle = styled.div`
    width: 36px;
    height: 31px;
    & > div {
        height: 100%;
    }
`;
export const ContainerListFavoritesStyle = styled(ContainerListBasketStyle)`
    width: 36px;
    margin-right: 20px;
`;
export const ContainerListViewStyle = styled(ContainerListBasketStyle)`
    width: 36px;
    margin-right: 150px;
`;

export const ContainerStarsStyle = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    h1 {
        margin: 0;
        font-size: 1rem;
        font-weight: 400;
    }
    span {
        color: ${() => theme.color.main};
    }
    & > hr {
        margin: 0 20px !important;
        width: 20px;
        transform: rotate(90deg);
    }
`;
export const NumberRatingStyle = styled.span`
    margin-left: 10px;
    margin-bottom: 3px;
`;
