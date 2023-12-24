import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const OutputProductsStyle = styled.div`
    width: 75%;
    padding-left: 40px;
    hr {
        border-color: white;
        margin: 14px 0;
    }
`;

export const ContainerPaginate = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 35px;
    .pagination-products {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        color: ${() => theme.color.navMenuLink};
        & > li {
            cursor: pointer;
            margin-right: 40px;
        }
    }

    .active {
        color: ${() => theme.color.main};
        text-decoration: underline;
    }
`;
