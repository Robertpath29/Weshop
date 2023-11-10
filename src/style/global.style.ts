import { createGlobalStyle } from "styled-components";
import { theme } from "./theme.style";

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
}
body{
    margin: 0;
    padding: 0;
    font-family: ${() => theme.fonts.main};
}

`;
