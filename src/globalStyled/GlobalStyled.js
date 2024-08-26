const { createGlobalStyle } = require("styled-components");

export const GlobalStyled = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body{
    background-color: #fff;
}
`