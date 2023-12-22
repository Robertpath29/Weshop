import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const FilterDisplayStyle = styled.div`
    h1 {
        margin: 0;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.2rem;
    }
    hr {
        border-color: white;
        margin: 20px 0;
    }
`;

export const ContainerRangeStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;

export const ContainerFilterPriceStyle = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${() => theme.color.navMenuLink};
    span {
        margin-left: 10px;
    }
    button {
        padding: 5px 35px;
        height: 35px;
        color: ${() => theme.color.navMenuLink};
        border: 1px solid ${() => theme.color.navMenuLink};
        &:hover {
            color: white;
        }
    }
`;

export const ContainerBestSaleStyle = styled.div`
    margin-bottom: 45px;
`;

export const ContainerKeywordStyle = styled.div`
    margin-top: 45px;
    display: flex;
    flex-wrap: wrap;
    button {
        max-width: 90px;
        margin: 5px;
        padding: 5px;
        background-color: ${() => theme.color.mensTShirtBackground};
        color: ${() => theme.color.navMenuLink};
        &:hover {
            color: ${() => theme.color.base};
        }
    }
`;
