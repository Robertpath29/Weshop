import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const NavMenuStyle = styled.article<{
    $men?: boolean;
    $menuVisibility: boolean;
}>`
    max-width: ${() => theme.size.globalWidth + "px"};
    overflow: ${(props) => (props.$menuVisibility ? "visible" : "hidden")};
    height: ${(props) => (props.$menuVisibility ? "max-content" : 0)};
    padding: ${(props) =>
        props.$menuVisibility ? "50px 150px 100px 50px" : "0px 150px 0px 50px"};
    cursor: auto;
    position: absolute;
    display: flex;
    justify-content: space-between;
    z-index: 11;
    left: 0;
    right: 0;
    top: 120px;
    background-color: ${() => theme.color.base};
    color: ${() => theme.color.navMenuLink};
    font-size: 1rem;
    box-shadow: 0px 3px 10px ${() => theme.color.navMenuLink};
    transition: all 0.3s;

    &::before {
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: ${() => theme.color.base};
        top: 0px;
        left: ${(props) => (props.$men ? "455px" : "545px")};
        transform: rotate(45deg);
    }

    &::after {
        content: "";
        position: absolute;
        cursor: pointer;
        width: 67px;
        height: 40px;
        top: -33px;
        left: ${(props) => (props.$men ? "451px" : "542px")};
    }

    h1 {
        margin: 0;
    }
    span {
        margin-bottom: 10px;
        cursor: pointer;

        &:hover {
            color: ${() => theme.color.main};
        }
    }
`;

export const TopGroupStyle = styled.div`
    display: flex;
    flex-direction: column;
`;
export const WinterGroupStyle = styled.div`
    display: flex;
    flex-direction: column;
`;
export const DiscountGroupStyle = styled.div`
    width: 260px;
    position: relative;
    cursor: pointer;
    background-color: #ededed;
    transition: all 0.3s;
    & > h2 {
        position: absolute;
        margin: 0;
        top: 30px;
        left: 20px;
        color: ${() => theme.color.main};
        &::before {
            content: "";
            position: absolute;
            bottom: -8px;
            width: 100%;
            height: 3px;
            background-color: ${() => theme.color.main};
        }
        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -17px;
            width: 60%;
            height: 2px;
            background-color: ${() => theme.color.main};
        }
    }
    &:hover {
        transform: scale(1.1);
    }
`;
export const SunglassesGroupStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HrGroupStyle = styled.div`
    width: 100px;
    margin-bottom: 15px;
    hr {
        background-color: #ededed;
        border: none;
        height: 1px;
    }
`;
