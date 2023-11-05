import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: inherit;
        font-family: sans-serif;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        background-color: #fff;
    }

    img {
        width: 100%;
    }
`