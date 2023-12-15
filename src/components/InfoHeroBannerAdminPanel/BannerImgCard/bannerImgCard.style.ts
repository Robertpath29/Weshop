import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const BannerImgCardStyle = styled.div<{ $visBtn: boolean }>`
    max-width: 250px;
    position: relative;
    padding: 10px;
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    flex-wrap: wrap;
    color: ${() => theme.color.main};
    border: 2px solid white;
    transition: all 0.3s;

    &:hover {
        border: 2px solid ${() => theme.color.main};
    }

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
    }
    a {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
        color: black;
    }
    img {
        width: 200px;
        height: 200px;
    }
    button {
        opacity: ${(props) => (props.$visBtn ? 1 : 0)};
        position: absolute;
        background: transparent;
        border: none;
        padding: 0;
        font-size: 2rem;
        right: 10px;
        cursor: pointer;
        transition: all 0.3s;
    }
`;
