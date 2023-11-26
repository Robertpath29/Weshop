import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const LoginPageStyle = styled.section`
    position: relative;
    background-image: url("./images/background_login.jpeg");
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.6;
        background-color: ${() => theme.color.main};
    }
`;

export const ContainerLoginStyle = styled.div`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    height: calc(100vh - 125px);
    display: flex;
    justify-content: center;
    align-items: center;
`;
