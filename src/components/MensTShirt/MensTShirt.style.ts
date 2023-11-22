import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const MensTShirtStyle = styled.section`
    position: relative;
    top: -5px; //fix retreat between Hero
    background-color: ${() => theme.color.mensTShirtBackground};
`;
export const MensTShirtContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 100px 0;
    max-width: ${() => theme.size.globalWidth + "px"};
`;
