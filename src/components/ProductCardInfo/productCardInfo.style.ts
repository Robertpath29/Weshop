import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const ProductCardInfoStyle = styled.div`
    margin-bottom: 200px;
`;
export const ContainerProductCardInfoStyle = styled.div`
    background-color: ${() => theme.color.main};
`;
export const ContainerBtnProductCardInfoStyle = styled.div`
    display: flex;
    justify-content: center;
    width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    & > button {
        max-width: none;
        width: 50%;
        padding: 30px 45px;
    }
`;
