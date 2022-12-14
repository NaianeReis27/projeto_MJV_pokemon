import styled from "styled-components";
import btn_login from "../../assets/btn_login.png"
import { fadeIn } from "../../Global";


export const Container = styled.div`
    margin: 22px auto 0 auto;
    width: 700px;
    height: 630px;
    animation-name: ${fadeIn};
    animation-duration: 1.5s;

    .btn_login{
        width: 100px;
        height: 85px;
        font-size: 22px;
        background: url(${""});
        background-size: 100%;
        background-repeat: no-repeat;
        border: none;
        image-rendering: pixelated;
    }
    div:first-child{
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      div{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        .logo_login{
        margin-top: 30px;
        width: 32px;
        height: 64px;
        h2{
         color :black ;
        }
        figure{
          margin: 0 auto;
        }
        
       }
      }
    }
    
    
`;
