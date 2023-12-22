import styled from "styled-components";
import { theme } from "../../../../style/theme.style";

export const FilterCategoryStyle = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-bottom: 40px;
    & > li {
        color: ${() => theme.color.navMenuLink};
        font-weight: 400;
        display: flex;
        justify-content: space-between;
        &:hover {
            color: ${() => theme.color.main};
            cursor: pointer;
        }
    }
`;
