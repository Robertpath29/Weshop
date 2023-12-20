import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const RadioBtnTypeOfClothingStyle = styled.div`
    & > div {
        max-width: 200px;
        input {
            width: 20px;
        }
    }
    select {
        width: 100%;
        padding: 10px;
        color: ${() => theme.color.main};
        text-transform: uppercase;
    }
`;
export const ContainerRadioBtnTypeOfClothingStyle = styled.div`
    display: flex;
    flex-direction: column;
`;
