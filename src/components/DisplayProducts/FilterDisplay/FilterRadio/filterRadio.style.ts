import styled from "styled-components";
import { theme } from "../../../../style/theme.style";

export const FilterCheckBoxStyle = styled.div`
    margin-bottom: 45px;
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0;
        & > span {
            color: ${() => theme.color.navMenuLink};
        }

        & > div {
            display: flex;
            align-items: center;
        }

        label {
            color: ${() => theme.color.navMenuLink};
            font-size: 0.9rem;
            cursor: pointer;
        }

        input[type="radio"] {
            appearance: none;
            position: relative;
            margin-right: 20px;
            cursor: pointer;
            width: 13px;
            height: 13px;
            border: 1px solid ${() => theme.color.navMenuLink};
            border-radius: 50%;
            font-family: "Times New Roman", Times, serif !important;

            &:checked {
                background-color: ${() => theme.color.base};
            }
            &:checked::before {
                content: "✓";
                font-size: 20px;
                position: absolute;
                top: 20%;
                left: 70%;
                transform: translate(-50%, -50%);
                color: ${() => theme.color.navMenuLink};
            }
        }
    }
`;
