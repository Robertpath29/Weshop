import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const MensTShirtInformationStyle = styled.div`
    display: flex;
`;

export const GroupStyle = styled.div`
    display: flex;
    align-items: center;
    margin-top: 100px;
    & > svg {
        margin-bottom: 20px;
        font-size: 3.8rem;
        color: ${() => theme.color.main};
    }
`;

export const TextGroupStyle = styled.div`
    margin: 0 30px;
    & > h1 {
        margin: 0;
        margin-bottom: 10px;
        font-size: 0.9rem;
        font-weight: 400;
    }
    & > p {
        margin: 0;
        font-size: 0.8rem;
        line-height: 25px;
    }
`;
