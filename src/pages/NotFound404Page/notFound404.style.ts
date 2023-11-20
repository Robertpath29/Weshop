import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const NotFound404PageStyle = styled.section`
    height: 100vh;
`;

export const NotFoundContainerStyle = styled.div`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    height: calc(100% - 125px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > button {
        font-size: 1.2rem;
        font-weight: 300;
    }
`;
export const NotFoundTitleStyle = styled.h1`
    margin: 0;
    font-size: 20rem;
    background: linear-gradient(
        148deg,
        rgba(60, 72, 82, 1) 55%,
        rgba(72, 104, 154, 1) 50%
    );
    -webkit-background-clip: text;
    color: transparent;
`;

export const FoundUsContainerStyle = styled.div`
    max-width: 220px;
    width: 100%;
    margin-top: 115px;
    margin-bottom: 50px;
    color: #3c4852;
    display: flex;
    justify-content: space-between;
    & > span {
        font-weight: 500;
    }
`;
export const FoundUsLinkStyle = styled.a`
    &:visited {
        color: #3c4852;
    }
    &:hover {
        color: ${() => theme.color.main};
    }
`;
