import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const RegisterFormStyle = styled.form`
    max-width: 100%;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
`;

export const ContainerFormStyle = styled.div`
    width: 100%;
    max-width: 500px;
`;

export const ContainerOldCustomer = styled.div`
    display: flex;
    align-items: end;
    & > h1 {
        margin: 0;
        margin-right: 30px;
    }
    & > span {
        font-size: 1.3rem;
        color: ${() => theme.color.main};
        text-decoration: underline;
        cursor: pointer;
    }
`;
