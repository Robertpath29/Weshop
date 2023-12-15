import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const NavMenuStyle = styled.article<{
    $men?: boolean;
    $menuVisibility: boolean;
}>`
    max-width: ${() => theme.size.globalWidth + "px"};
    height: 0;
    overflow: hidden;
    position: absolute;
    display: flex;
    color: ${() => theme.color.navMenuLink};
    font-size: 1rem;
    z-index: 1;
    left: 0;
    right: 0;
    cursor: auto;
    top: 120px;
    box-shadow: 0px 8px 10px ${() => theme.color.navMenuLink};
    justify-content: space-between;
    transition: all 0.3s;
    background-image: ${(props) =>
        props.$men
            ? "url(/images/getty_506481516_200011512000928031_324666.jpg)"
            : "url(/images/istockphoto-916092484-612x612.jpg)"};
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
        z-index: -1;
        opacity: 0.6;
    }
`;

export const TopGroupStyle = styled.div`
    margin: 50px 0 0 50px;
    display: flex;
    flex-direction: column;
    & > span {
        margin-bottom: 5px;
    }
    & > span:hover {
        cursor: pointer;
        color: ${() => theme.color.main};
    }
`;
export const WinterGroupStyle = styled.div`
    margin: 50px 0 0 0px;
    display: flex;
    flex-direction: column;
    & > span {
        margin-bottom: 5px;
    }
    & > span:hover {
        cursor: pointer;
        color: ${() => theme.color.main};
    }
`;
export const DiscountGroupStyle = styled.div<{ $men?: boolean }>`
    margin: 90px 0 0 50px;
    height: 260px;
    width: 260px;
    position: relative;
    cursor: pointer;
    background-color: #ededed;
    transition: all 0.3s;
    background-image: ${(props) =>
        props.$men
            ? `url("/images/discount_menu_nav.avif")`
            : `url("/images/discount_women_nav_menu.jpeg")`};
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
    margin: 50px 50px 0 0;
    display: flex;
    flex-direction: column;
    & > span {
        margin-bottom: 5px;
    }
    & > span:hover {
        cursor: pointer;
        color: ${() => theme.color.main};
    }
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
