import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #FCFCFC;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;