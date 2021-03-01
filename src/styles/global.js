import { createGlobalStyle } from 'styled-components';

import { COLOR } from './variables';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        width: 100%;
        height: auto;
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }

    body {
        position: relative;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: ${COLOR.DARKER}
    }

    h1,
    h2,
    h3,
    h4,
    p,
    blockquote,
    figure,
    ol,
    ul {
        margin: 0;
        padding: 0;
    }

    main,
    section,
    li {
        display: block;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: 0;
        padding: 0;
        background: none;
        text-shadow: none;
        appearance: none;
        &:focus {
            outline: none;
        }
    }

    input {
        &:focus {
            outline: none;
        }
    }
`;