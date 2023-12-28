import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const ProductCardStyle = styled.div<{ $prodDisplay: string }>`
    width: ${({ $prodDisplay }) =>
        $prodDisplay === "block" ? "235px" : "100%"};
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

export const ContainerBlockStyle = styled.div``;

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
        margin: 25px 0;
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
    display: flex;
    align-items: center;
`;
