import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const LogoStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 160px;
    user-select: none;
    cursor: pointer;
    color: ${() => theme.color.logo};
    font-family: ${() => theme.fonts.logo};
    border: 2px solid ${() => theme.color.logo};
    & > span {
        font-size: 2.3rem;
        line-height: 40px;
        margin-bottom: 10px;
    }
    font-weight: bold;
`;
