import styled, { createGlobalStyle } from "styled-components";

export const WrapperContainer = styled.div`
    max-width: 1210px;
    width: 100%;
    margin: 0 auto;
    padding: 0;
`

export const GlobalStyle = createGlobalStyle`
html {
    scroll-behavior: smooth;
}
body{
    margin: 0;
    padding: 0;
    background-color: #0F0F11;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-x: hidden !important;

    /* @media only screen and (max-width: 375px) {
        overflow-x: hidden !important;
    } */
}

`

export const WrapperAdmin = styled.div`
 display: flex;
`