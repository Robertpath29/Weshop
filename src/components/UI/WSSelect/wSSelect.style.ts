import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const WSSelectStyle = styled.select`
    width: 150px;
    background: transparent;
    border: 1px solid gray;
    color: ${() => theme.color.main};
    padding-left: 10px;
`;
