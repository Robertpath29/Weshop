import styled from "styled-components";
import { theme } from "../../../../style/theme.style";

export const ProductsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const NotFoundStyle = styled.h1`
    margin: 50px auto;
    color: ${() => theme.color.navMenuLink};
`;
