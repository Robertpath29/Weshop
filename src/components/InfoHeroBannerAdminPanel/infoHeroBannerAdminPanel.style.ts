import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const InfoHeroBannerAdminPanelStyle = styled.div<{
    $disabled?: boolean;
}>`
    & > h2 {
        color: ${() => theme.color.main};
    }
    & > form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > div {
            margin-bottom: 0;
        }
        input {
            cursor: ${(props) => (props.$disabled ? "not-allowed" : "auto")};
        }
    }
    label {
        color: ${(props) => (props.$disabled ? "gray" : theme.color.main)};
    }
`;

export const ContainerImageCard = styled.div`
    display: flex;
    gap: 20px;
    & > h1 {
        color: red;
    }
`;
