import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const MensTShirtCardsCollectionStyle = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
`;
export const MensTShirtCardCollectionStyle = styled.div`
    width: 49%;
    background-color: ${() => theme.color.base};
    border: 5px solid #ededed;
    transition: all 0.3s;
    background-image: url("/images/collection.webp");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 40px;
    &:hover {
        transform: scale(1.03);
    }
`;
export const MensTShirtCardDiscountStyle = styled(
    MensTShirtCardCollectionStyle
)`
    display: flex;
    align-items: center;
    background-image: url("/images/sale_discount.jpeg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
`;

export const MensTShirtCardBorderStyle = styled.div`
    display: flex;
    justify-content: end;
    border: 5px solid ${() => theme.color.main};
    margin: 10px 20px;
`;

export const CardCollectionContainerStyle = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px;
    & > h3 {
        margin: 0;
        font-size: 1.3rem;
        line-height: 10px;
    }
    & > p {
        margin: 0;
        font-size: 2.2rem;
        font-weight: 500;
        color: ${() => theme.color.main};
    }
    & > span {
        font-size: 1.3rem;
        font-weight: 600;
        letter-spacing: 13px;
    }
`;

export const CardDiscountContainerStyle = styled.div`
    width: max-content;
    margin-left: 35px;
    & > h3 {
        margin: 0;
        font-size: 1.3rem;
    }
    & > p {
        margin: 0;
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: 10px;
        & > span {
            color: ${() => theme.color.main};
        }
    }

    & > span {
        line-height: 40px;
        font-size: 0.8rem;
    }
`;
