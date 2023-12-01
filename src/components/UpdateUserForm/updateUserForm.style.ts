import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const UpdateUserFormStyle = styled.form``;
export const ContainerFormUpdateStyle = styled.div`
    width: 100%;
    max-width: 450px;
`;

export const ContainerSettingsMenu = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DisplaySettingsStyle = styled.div`
    width: 80%;
`;

export const SettingName = styled.span<{ $active: boolean }>`
    margin-top: 10px;
    color: ${(props) =>
        props.$active ? theme.color.main : theme.color.navMenuLink};
    cursor: pointer;
    font-size: 1.2rem;
    &:hover {
        color: ${() => theme.color.main};
    }
`;
