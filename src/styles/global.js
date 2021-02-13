import { createGlobalStyle } from 'styled-components';

import { color } from './variables';

export const GlobalStyle = createGlobalStyle`
    html {
        width: 100%;
        height: auto;
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }

    body {
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');

        position: relative;
        font-weight: 400;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        background-color: #000;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: ${color.light};
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