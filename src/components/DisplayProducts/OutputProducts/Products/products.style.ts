import styled from "styled-components";
import { theme } from "../../../../style/theme.style";

export const ProductsStyle = styled.div<{ $prodDisplay: string }>`
    display: ${({ $prodDisplay }) =>
        $prodDisplay === "block" ? "flex" : "block"};
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const NotFoundStyle = styled.h1`
    margin: 50px auto;
    color: ${() => theme.color.navMenuLink};
    text-align: center;
`;
