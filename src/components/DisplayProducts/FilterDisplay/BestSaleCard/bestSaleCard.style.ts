import styled from "styled-components";
import { theme } from "../../../../style/theme.style";

export const BestSaleCardStyle = styled.div``;
export const ContainerBestSale = styled.div`
    max-width: 350px;
    display: flex;
`;
export const ContainerImageStyle = styled.div`
    width: 100px;
    & > img {
        width: 100%;
        cursor: pointer;
    }
`;
export const ContainerInfoStyle = styled.div`
    margin-left: 20px;
    margin-right: 10px;
    & > h1 {
        cursor: pointer;
        font-weight: 300;
        font-size: 1.07rem;
        margin-bottom: 10px;
        &:hover {
            color: ${() => theme.color.main};
        }
    }
`;
