import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const AdminPanelStyle = styled.section`
    position: relative;
    background-image: url("/images/wp2508380.webp");
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
        opacity: 0.7;
        background-color: lightgray;
    }
`;
export const ContainerAdminPanelStyle = styled.div`
    position: relative;
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    height: calc(100vh - 125px);
    & > h1 {
        color: ${() => theme.color.main};
    }
    & > hr {
        margin: 30px 0;
    }
`;
