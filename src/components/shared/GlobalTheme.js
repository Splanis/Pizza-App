import { createGlobalStyle } from "styled-components";

const GlobalTheme = createGlobalStyle`
    *,   
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px; 
    }

    *:focus {
        outline: none;
    }
`;

export default GlobalTheme;
