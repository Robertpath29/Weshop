import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const ProductDescriptionStyle = styled.div`
    width: ${() => theme.size.globalWidth + "px"};
    position: relative;
    margin: 40px auto;
    z-index: 11;
    & > p {
        margin: 0;
        margin-bottom: 130px;
        font-size: 1.3rem;
        color: ${() => theme.color.navMenuLink};
    }
    &::before {
        content: "";
        position: absolute;
        width: 40px;
        height: 40px;
        top: -50px;
        left: 262px;
        background-color: white;
        transform: rotate(45deg);
    }
`;
