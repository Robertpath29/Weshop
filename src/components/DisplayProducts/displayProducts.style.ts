import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const DisplayProductsStyle = styled.div`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
`;
