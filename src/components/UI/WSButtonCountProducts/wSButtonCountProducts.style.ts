import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const WSButtonCountProductsStyle = styled.div`
    display: flex;
    align-items: center;

    & > span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        width: 40px;
        height: 40px;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        color: ${() => theme.color.main};
    }
    & > button {
        width: 40px;
        height: 40px;
        border: 1px solid gray;
        background: transparent;
        font-size: 1.7rem;
        color: gray;
        cursor: pointer;
        &:hover {
            background-color: ${() => theme.color.main};
            color: ${() => theme.color.base};
        }
    }
`;
