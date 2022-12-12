import { createGlobalStyle, keyframes } from "styled-components";


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    color:var(--font-color);
  }

  @font-face {
  font-family: "Power";
  src: local("power"),
  url("../src/fonts/power/power green.ttf") format("truetype");
  font-weight: bold;
}


  :root {
  --main-color: #E74349;
  --blue-color: #1F2773;
  --font-color: #F2E6FA;
  --yellow-color: #F8C338;
  --gray-color: #C8D0C0;
  --white-color: #FFFFFF;
  }

  body, input, button{
    font-family: "Power", "Inter";
  }

  .text_evolution{
    font-size: 22px;
    margin-top: 50px;
  }
  .text_loading{
    color: #1F2773;
    text-align: center;
    animation: text 1.5s ease-in-out infinite;
  }
  button, a {
    cursor: pointer;
  }
  .App{
    width: 100%;
    height:150%;
  }

  h5{
    text-align: center;
    color: #1F2773;
    font-size: 32px;
  }

 


`;
