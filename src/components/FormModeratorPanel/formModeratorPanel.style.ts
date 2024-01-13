import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const FormModeratorPanelStyle = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    hr {
        margin: 0 20px;
    }
    label {
        color: ${() => theme.color.main};
        text-transform: uppercase;
        font-weight: bold;
    }
    textarea {
        font-size: 1.3rem;
        color: ${() => theme.color.main};
        padding: 10px;
    }
    input[type="file"] {
        margin-right: 20px;
    }
`;

export const ContainerModeratorForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;
export const ContainerFormData = styled.div`
    width: max-content;
`;

export const ContainerImagesStyle = styled.div`
    img {
        max-width: 200px;
        max-height: 200px;
        margin: 10px;
        border: 1px solid black;
    }
`;
export const TitleStyle = styled.h1<{ $error?: string }>`
    margin: 0;
    margin-bottom: 10px;
    color: ${({ $error }) => ($error ? "red !important" : theme.color.main)};
`;

export const ContainerCompositionStyle = styled.div`
    & > hr {
        width: 100%;
        margin-left: 0;
    }
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
    & > label {
        color: ${() => theme.color.main};
    }
`;
