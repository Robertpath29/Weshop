import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const SponsorsStyle = styled.div`
    background-color: ${() => theme.color.mensTShirtBackground};
    height: 250px;
    display: flex;
    align-items: center;
`;
export const ContainerSponsorsStyle = styled.div`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    font-size: 6rem;
    text-align: center;
`;
