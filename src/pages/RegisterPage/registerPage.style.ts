import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const RegisterPageStyle = styled.section`
    position: relative;
    background-image: url("/images/background_register.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 100px;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.3;
        background-color: ${() => theme.color.main};
    }
`;
export const ContainerRegisterPageStyle = styled.div`
    position: relative;
    z-index: 11;
    padding-top: 20px;
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    height: calc(100vh - 125px);
    & > h1 {
        margin: 0;
        margin-bottom: 20px;
    }
`;
