import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const HeaderStyle = styled.header`
    position: relative;
    background-color: ${() => theme.color.main};
    height: 125px;
    z-index: 12;
`;

export const ContainerHeader = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: ${() => theme.size.globalWidth + "px"};
    padding: 17px 0 17px 0;
    display: flex;
    justify-content: space-between;
`;

export const ContainerLogo = styled.div``;

export const ContainerContact = styled.div`
    width: 270px;
    font-size: 0.75rem;
    display: flex;
    justify-content: space-between;
`;

export const ContactGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    & > svg {
        color: ${() => theme.color.base};
    }
    & > span {
        padding-left: 6px;
        color: ${() => theme.color.base};
    }
`;

export const ContainerNav = styled.div`
    margin-bottom: 8px;
    margin-right: 70px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
`;

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const LoginGroup = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ContainerGroupLogin = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: ${() => theme.color.base};
    & > span {
        cursor: pointer;
    }
`;
