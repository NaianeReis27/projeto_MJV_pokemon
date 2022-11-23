import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    color:var(--font-color);
  }

  :root {
  --main-color: #E74349;
  --blue-color: #1F2773;
  --font-color: #F2E6FA;
  }

  body, input, button{
    font-family: 'Inter', sans-serif;
  }

  button, a {
    cursor: pointer;
  }
  .App{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

`;
