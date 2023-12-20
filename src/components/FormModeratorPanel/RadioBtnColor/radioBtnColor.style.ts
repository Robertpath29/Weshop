import styled from "styled-components";

export const RadioBtnColorStyle = styled.div`
    & > div {
        max-width: 200px;
        margin: 0;
        input {
            width: 20px;
        }
    }
`;

export const ColorStyle = styled.div<{ $color: string }>`
    width: 20px;
    height: 20px;
    border: 1px solid black;
    background-color: ${(props) => props.$color};
`;
