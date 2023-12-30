import styled from "styled-components";
import { theme } from "../../style/theme.style";

export const HistoryNavStyle = styled.div<{ $colorBackground?: string }>`
    background-color: ${({ $colorBackground }) =>
        $colorBackground ? $colorBackground : theme.color.mensTShirtBackground};
    & > ul {
        max-width: ${() => theme.size.globalWidth + "px"};
        margin: 0 auto;
        padding: 25px 0;
        list-style-type: none;
        display: flex;
        font-weight: 300;

        & > li {
            display: flex;
            align-items: center;

            & > svg {
                color: ${() => theme.color.navMenuLink};
            }
            & > a {
                text-decoration: none;
                color: ${() => theme.color.navMenuLink};
                &:hover {
                    color: ${() => theme.color.main};
                }
            }
            & > span {
                cursor: default;
                color: ${() => theme.color.navMenuLink};
            }
        }
    }
`;
