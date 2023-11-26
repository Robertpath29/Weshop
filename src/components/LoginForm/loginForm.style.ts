import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const LoginFormStyle = styled.form`
    position: relative;
    z-index: 11;
    width: 400px;
`;

export const ContainerNewCustomer = styled.div`
    display: flex;
    align-items: center;
    & > h1 {
        color: white;
        margin-right: 15px;
    }
    & > span {
        color: ${() => theme.color.logo};
        font-size: 1.2rem;
        text-decoration: underline;
        cursor: pointer;
    }
`;
export const ContainerInput = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    & > label {
        color: white;
    }
`;
export const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
`;
