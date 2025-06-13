import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
    background-color: #0B1A2B;
    color: #E0F7FA;
  }

  button {
    background-color: #00FFAB;
    color: #0B1A2B;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  button:hover {
    background-color: #00e69c;
  }
`;

export default GlobalStyle;
