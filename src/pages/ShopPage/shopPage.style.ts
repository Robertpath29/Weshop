import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const ShopPageStyle = styled.section`
    & > hr {
        border: 1px solid;
        border-color: ${() => theme.color.mensTShirtBackground};
        margin: 60px 0px 60px 0;
    }
`;
