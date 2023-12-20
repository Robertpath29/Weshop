import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const ModeratorPanelStyle = styled.section`
    position: relative;
    background-image: url("/images/konsolidirovannyij-sklad.webp");
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    overflow: hidden;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.8;
        background-color: lightgray;
    }
    h1 {
        position: relative;
        color: ${() => theme.color.main};
    }
`;
export const ContainerModeratorPanelStyle = styled.div`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    height: calc(100vh - 125px);
    overflow: auto;
`;
