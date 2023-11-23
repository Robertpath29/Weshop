import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const NavMenuStyle = styled.article<{
    $men?: boolean;
    $menuVisibility: boolean;
}>`
    overflow: ${(props) => (props.$menuVisibility ? "visible" : "hidden")};
    height: max-content;
    cursor: auto;
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 120px;
    box-shadow: 0px 3px 10px ${() => theme.color.navMenuLink};
    transition: height 0.3s;
    &::before {
        content: "";
        z-index: -1;
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: ${() => theme.color.base};
        top: 0px;
        left: ${(props) => (props.$men ? "455px" : "545px")};
        transform: rotate(45deg);
    }
`;

export const NavMenuContainerStyle = styled.div<{
    $men?: boolean;
    $menuVisibility: boolean;
}>`
    max-width: ${() => theme.size.globalWidth + "px"};
    display: flex;
    position: relative;
    justify-content: space-between;
    color: ${() => theme.color.navMenuLink};
    height: ${(props) => (props.$menuVisibility ? "max-content" : "0")};
    padding: ${(props) =>
        props.$menuVisibility ? "50px 150px 100px 50px" : "0px 150px 0px 50px"};
    overflow: hidden;
    background-color: ${() => theme.color.base};
    font-size: 1rem;
    transition: all 0.3s;
    background-image: ${(props) =>
        props.$men
            ? "url(./images/getty_506481516_200011512000928031_324666.jpg)"
            : "url(./images/istockphoto-916092484-612x612.jpg)"};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &::before {
        content: "";

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${() => theme.color.base};
        opacity: 0.6;
    }
    h1 {
        margin: 0;
        z-index: 1;
    }
    span {
        margin-bottom: 10px;
        cursor: pointer;
        z-index: 1;

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
export const DiscountGroupStyle = styled.div<{ $men?: boolean }>`
    width: 260px;
    position: relative;
    cursor: pointer;
    background-color: #ededed;
    transition: all 0.3s;
    background-image: ${(props) =>
        props.$men
            ? `url("./images/discount_menu_nav.avif")`
            : `url("./images/discount_women_nav_menu.jpeg")`};
    background-repeat: no-repeat;
    background-size: cover;

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
