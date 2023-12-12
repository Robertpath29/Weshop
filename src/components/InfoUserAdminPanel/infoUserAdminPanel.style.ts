import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const InfoUserAdminPanelStyle = styled.table`
    width: 100%;
    color: ${() => theme.color.main};
    font-size: 1.5rem;
    border-collapse: collapse;
    th {
        border-bottom: 1px solid black;
        padding-bottom: 15px;
    }
    td {
        text-align: center;
        border: 1px solid black;
        padding: 10px;
    }
`;
