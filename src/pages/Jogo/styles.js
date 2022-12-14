import styled from "styled-components";
import Pikachu from "../../assets/Pikachu.png";

export const Estilos = styled.div`


    font-family: 'Inter';
    background: #F2E6FA;
    color: #1F2773;
    width: 100%;
    height: 800px;
    list-style-type: none;
   
  

.head {

    display: flex;
    justify-content: space-around;
    align-items: center;
}
img {
    min-height: 150px;
    min-width: 150px;


   
}



h1{
    padding:15px;
    text-align: center;
    font-size: 45px;   
    margin-bottom: 30px;
    color:#1F2773;


}

h2 {
    text-align: center;
    span {
        color: #1F2773;
    }
}



.board{
    display: grid;
    grid-template-columns: repeat(3, 170px);
    grid-template-rows: repeat(3, 130px);
    gap: 1rem;

    animation-name: board;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: linear; 

}



.cell {
    display: grid;
    align-items: center;
    justify-content: center;
    
    background-color: #ffffff;
    border-radius: 5px;
    font-size: 3rem;
    font-weight: bold;
    color: #000000;

    cursor: pointer;
}
.cell:not(.O):not(.X):hover{
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.cell.O {
    
    color: #EA524F;
}

.cell.X {
    color:#1F2773;
}

.footer{
    text-align: center;

}


.winner-message, .winner{
    margin: 2rem;
    color: #EA524F;
}

@keyframes board {
  0% { visibility: hidden; opacity: 0; width:0px; height: 0px; }
  25% { visibility: hidden; opacity: 0; width:0px; height:0px; }
  40% { visibility: hidden; opacity: 0; width:200px; height:200px; }
  50%  {visibility: hidden; opacity: 0; width: 400px; height: 300px}
  65%  {visibility: hidden; opacity: 0; width: 500px; height: 350px}
  75% { visibility: hidden; opacity: 0; width: 550px; height: 450px; }
  100%{ visibility: visible; opacity:1; width: 550px; height: 450px;}
 }


 


 

`




