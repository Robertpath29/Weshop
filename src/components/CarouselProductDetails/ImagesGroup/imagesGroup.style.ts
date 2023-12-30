import styled from "styled-components";

export const ImagesGroupStyle = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    & > img {
        width: 110px !important;
        gap: 10px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            transform: scale(1.1);
        }
    }
`;
