import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }
  html, body, #root {
    height: 100%;

    body {
      background: #181818;
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      font-family: 'Montserrat', sans-serif;
      color: #FFF;
    }

`;
