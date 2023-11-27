import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const FlashMessageStyle = styled.div`
    position: fixed;
    width: 100%;
    max-width: 500px;
    height: max-content;
    top: 0px;
    left: 50%;
    transform: translate(-50%);
    background-color: ${() => theme.color.main};
    z-index: 15;
    animation: animVisibility 0.5s ease-in-out forwards;
    @keyframes animVisibility {
        from {
            top: 0px;
        }
        to {
            top: 125px;
        }
    }
`;

export const MessageGroupStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.1rem;
    & > p {
        margin: 0;
        margin-right: 20px;
        color: greenyellow;
    }
    & > svg {
        font-size: 4rem;
        color: greenyellow;
    }
`;

export const ContainerBtnStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
