import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        width: 100%;
        height: auto;
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }

    body {
        position: relative;
        font-family: $f-base;
        font-weight: 400;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        min-height: 100vh;
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