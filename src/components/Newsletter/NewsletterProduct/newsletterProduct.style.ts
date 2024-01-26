import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const NewsletterProductStyle = styled.div`
    & > hr {
        border: 1px solid;
        border-color: ${() => theme.color.mensTShirtBackground};
        margin: 40px 0px 40px 0;
    }
`;
export const ContainerNewsletterProductStyle = styled.div<{
    $reverse?: boolean;
}>`
    display: flex;
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    & > img {
        width: 80px;
        height: 120px;
        cursor: pointer;
    }
`;
export const ContainerInfoNewsletterProductStyle = styled.div<{
    $reverse?: boolean;
}>`
    height: 116px;
    margin: 5px 20px;
    & > h1 {
        font-size: 0.7rem;
        cursor: pointer;
        &:hover {
            color: ${() => theme.color.main};
        }
    }
    display: ${({ $reverse }) => ($reverse ? "flex" : "block")};
    flex-direction: ${({ $reverse }) => ($reverse ? "column" : "column")};
    align-items: ${({ $reverse }) => ($reverse ? "end" : "end")};
    & > h1 {
        font-weight: 400;
        margin: 0;
        margin-bottom: 15px;
    }
`;
