import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const MensTShirtLifestyleStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const BlockShopStyle = styled.div`
    position: relative;
    width: 370px;
    height: 500px;
    overflow: hidden;
    border-bottom: 5px solid white;
    background-image: url("/images/mens-t-shirt3.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 550px;
    transition: all 0.3s;

    &:hover {
        border: none;
        transform: scale(1.1);
        background-size: 500px;
        background-position: center;
        &::before {
            display: none;
        }
        &::after {
            display: none;
        }
        & > div {
            display: none;
        }
    }
    &::before {
        content: "";
        z-index: 111;
        position: absolute;
        height: 135px;
        width: 5px;
        background-color: white;
        bottom: 0px;
        left: 0px;
        transition: all 0.3s;
    }
    &::after {
        content: "";
        z-index: 111;
        position: absolute;
        height: 234px;
        width: 5px;
        background-color: white;
        bottom: 0px;
        right: 0px;
        transition: all 0.3s;
    }

    & > button {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        bottom: 40px;
    }
`;

export const ShopHiddenStyle = styled.div`
    width: 700px;
    height: 19px;
    position: absolute;
    top: 281px;
    left: -128px;
    background-color: ${() => theme.color.mensTShirtBackground};
    transition: all 0.3s;
    transform: rotate(345deg);
`;

export const ShopTopBorderStyle = styled.div`
    width: 410px;
    height: 5px;
    position: absolute;
    bottom: 186px;
    left: -10px;
    background-color: white;
    transition: all 0.3s;
    transform: rotate(345deg);
`;

export const BlockProductsStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const ProductStyle = styled.div`
    width: 370px;
    height: 240px;
    background-color: #ededed;
    position: relative;
    &::after {
        content: "New";
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        top: 20px;
        left: 20px;
        border-radius: 50%;
        background-color: ${() => theme.color.main};
        color: white;
        font-size: 0.8rem;
    }
`;

export const BlockLifestyle = styled.div`
    position: relative;
    padding: 25px 15px;
    width: 370px;
    height: 500px;
    transition: all 0.3s;
    &::before {
        content: "";
        position: absolute;
        z-index: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: white;
        background-image: url("/images/mens-t-shirt2.webp");
        background-size: 600px;
        background-position: center;
        background-repeat: no-repeat;
        transition: all 0.3s;
    }
    &:hover {
        &::before {
            transform: scale(1.1);
            background-size: 500px;
        }

        & > div {
            border: 5px solid transparent;
            & > svg {
                animation: arrowAnim 0.4s linear 0s infinite alternate;
            }
        }
    }
    @keyframes arrowAnim {
        from {
            margin-left: 0px;
        }
        to {
            margin-left: 30px;
        }
    }
`;

export const BlockLifeBorderStyle = styled.div`
    border: 5px solid ${() => theme.color.main};
    height: 100%;
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    & > svg {
        font-size: 3rem;
        color: ${() => theme.color.main};
    }
`;
