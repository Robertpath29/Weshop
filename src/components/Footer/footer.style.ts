import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const FooterStyle = styled.footer``;
export const ContainerFooterStyle = styled.div`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    padding-top: 70px;
    display: flex;
    justify-content: space-between;
`;
export const InfoFooterStyle = styled.div`
    max-width: 300px;

    & > h1 {
        font-family: ${() => theme.fonts.logo};
        margin-top: 0px;
        margin-bottom: 15px;
        color: ${() => theme.color.main};
        font-weight: 500;
        font-size: 2.3rem;
    }
    & > p {
        margin: 0;
        color: ${() => theme.color.navMenuLink};
        margin-bottom: 35px;
    }
`;
export const SupportFooterStyle = styled.div`
    max-width: 130px;
    display: flex;
    flex-direction: column;
    color: ${() => theme.color.navMenuLink};
    & > h1 {
        font-size: 1rem;
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 30px;
        text-transform: uppercase;
    }
    & > a {
        color: ${() => theme.color.navMenuLink};
        text-decoration: none;
        margin-bottom: 5px;
        &:hover {
            color: ${() => theme.color.main};
        }
    }
`;
export const DutiesFooterStyle = styled(SupportFooterStyle)`
    max-width: 190px;
`;
export const InstagramFeedFooterStyle = styled.div`
    color: ${() => theme.color.navMenuLink};
    & > h1 {
        font-size: 1rem;
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 30px;
        text-transform: uppercase;
    }
    & > hr {
        border: 1px solid;
        border-color: ${() => theme.color.mensTShirtBackground};
        margin: 20px 8px 20px 0;
    }
`;

export const ContainerPhotosStyle = styled.div`
    cursor: pointer;
    max-width: 240px;
    .instagram-feed-img {
        width: 50px;
    }
`;

export const ContainerMethodPay = styled.div`
    display: flex;
    align-items: center;
    font-size: 2.2rem;
    & > svg {
        margin-right: 15px;
    }
`;

export const ContainerLinksStyle = styled.div`
    max-width: ${() => theme.size.globalWidth + "px"};
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    & > hr {
        width: 35%;
        border: 1px solid;
        border-color: ${() => theme.color.mensTShirtBackground};
        margin: 20px 0 30px 0;
    }
`;
export const LinksGroupStyle = styled.div`
    width: max-content;
    & > a {
        font-size: 1.5rem;
        color: ${() => theme.color.navMenuLink};
        margin-right: 30px;
        &:hover {
            color: ${() => theme.color.main};
        }
    }
    & > :last-child {
        margin-right: 0;
    }
`;

export const CopyrightsStyle = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${() => theme.color.main};
    & > span {
        margin: 15px 0;
        color: ${() => theme.color.base};
    }
`;
