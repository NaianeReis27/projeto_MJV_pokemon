import styled from "styled-components";

export const Inicio = styled.main`

nav {
    background:var(--main-color);
}



 .pokebola{  
    
     background-color: var(--main-color);
    
     transition: all 0.5s ease-out;
     overflow: hidden;   
     animation-name: div;
     animation-duration: 2s;
     animation-fill-mode: forwards;
 
 }
 @keyframes div {
    0% {visibility:visible; }
    25% {visibility: visible; opacity: 1; height: 800px;}
   // 50% {visibility: visible; opacity: 1; height: 600px;}
    //75% {visibility: visible; opacity: 1; height: 400px;}
    100% {visibility: visible; opacity: 1; height: 300px; }
  }


.alinhar-botao{
 display:flex;
 align-items: center;
 justify-content: center;

}



 button {
    background:#1F2773;

    margin-top: 100px;
    animation-name: button;
    animation-duration: 3s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out; 
   
    
 }
 @keyframes button {
  0% { visibility: hidden; opacity: 0; }
  25% { visibility: visible; opacity: 0; }
  75% { visibility: visible; opacity: 1; }
 }

 footer {
    height: 200px;
 }






`

export const Container = styled.figure`

    display:flex;
    align-items:center;
    justify-content:center;
    position: relative;

img {
    width: 100vw;
    position: absolute;

}


`
 
