import styled from "styled-components";
import login from "../../assets/input_pixel2.png";


export const Container = styled.div`
  label{
    width: 100%;
    text-align: start;
    color:black;
    font-size:18px;
  }
  input{
    border: none;
    background: none;
    width: 380px;
    height: 72px;
    padding: 20px 20px;
    background-image: url(${login});
    background-position: center;
    background-repeat: no-repeat;
    image-rendering: pixelated;
    background-size: 100%;
    color: black;
    font-size: 20px;
    }
`;
