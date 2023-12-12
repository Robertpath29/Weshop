import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const AdminPanelStyle = styled.section``;
export const ContainerAdminPanelStyle = styled.div`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    & > h1 {
        color: ${() => theme.color.main};
    }
`;
