import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const UserSettingsPageStyle = styled.section`
    position: relative;
    background-image: url("/images/cogs-gear-wheel-mechanisms-hi-tech-digital-technology-engineering-abstract-technical-background_302149-28.avif");
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

export const ContainerUserSettingsStyle = styled.div`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    height: calc(100vh - 125px);
    display: flex;
    position: relative;
`;
