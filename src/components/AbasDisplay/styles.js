import styled from "styled-components";
import aba from "../../assets/aba.svg";
import aba2 from "../../assets/aba2.svg";

export const Container = styled.div`
  display: flex;
  background-color: #6870d8;
  height: 500px;
  
  .box{
    position: absolute;
    width: 490px;
    height: 40px;
    top: 308px;

    button {
      width:50%;
      height: 40px;
      color: black;
      font-size: 20px;
      background: none;
      border:none;
      cursor: pointer;
      z-index:4
    }
  }

  .aba1 {
    background-image: url(${aba});
    z-index: ${({zindex})=> zindex ? 1 : 3};
  }

  .aba2 {
    flex-direction: column;
    background-image: url(${aba2});
    z-index: ${({zindex})=> zindex ? 3: 1};
  }

  .aba {
    margin-top: -24px;
    width: 490px;
    background-repeat: no-repeat, no-repeat;
    background-position: bottom;
    background-size: 100%;
    position: absolute;
    .box_text{
      position: absolute;
      height: 150px;
      bottom: 0;
      display: flex;
      flex-direction: column;
    }
  }
`;
