import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const PasswordResetPageStyle = styled.section`
    background-color: ${() => theme.color.navMenuLink};
`;

export const ContainerPasswordResetStyle = styled.div`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    height: 100vh;
    padding-top: 20px;
`;
