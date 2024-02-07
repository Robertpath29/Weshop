import styled from "styled-components";
import { theme } from "../../../../style/theme.style";

export const ProductStyle = styled.div`
    & > hr {
        border: 1px solid;
        border-color: ${() => theme.color.mensTShirtBackground};
        margin: 25px 0;
    }
`;
export const ContainerInfoStyle = styled.div`
    color: ${() => theme.color.main};
    margin-left: 20px;
    max-width: 200px;
    & > h1 {
        color: black;
        font-weight: 300;
        font-size: 1.1rem;
        margin: 0;
        margin-bottom: 15px;
        cursor: pointer;
        &:hover {
            color: ${() => theme.color.main};
        }
    }
`;

export const ProductContainerStyle = styled.div`
    position: relative;
    display: flex;
    width: 350px;

    & > img {
        width: 80px;
        height: 110px;
        cursor: pointer;
    }
    & > button {
        position: absolute;
        right: 0;
        display: flex;
        justify-content: center;
        width: 20px;
        height: 20px;
        cursor: pointer;
        background: transparent;
        border: 1px solid ${() => theme.color.navMenuLink};
        border-radius: 50%;
        padding: 0;
        font-size: 0.8rem;
        color: ${() => theme.color.navMenuLink};
        &:hover {
            border: 1px solid ${() => theme.color.main};
            color: ${() => theme.color.main};
        }
    }
`;
