import  styled,{ keyframes } from "styled-components";
import display from "../../assets/display.svg";
import btn_dir from "../../assets/btn_dir.svg";
import btn_esq from "../../assets/btn_esq.svg";


const scaleUpCenter = keyframes`
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
            opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
  }
`;

export const Container = styled.div`
  border: solid #a80003 6px;
  background-color: white;
  position: absolute;
  width: 852px;
  height: 470px;
  top: 314px;
  right: 372px;
  left: 0px;
  margin: 0 auto;
  overflow: hidden;
	animation: ${scaleUpCenter} 0.1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;


  figure {
    svg {
      margin: 10px;
      width: 30px;
      height: 30px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      position: absolute;
      background-color: none;
      border: none;
    }
    img {
      width: 100%;
    }
  }
  
  .box{
    margin-top: -27px;
  }

  div {
    display: flex;
    width: 100%;
    overflow: hidden;

    h2 {
      top: 108px;
      position: absolute;
      color: black;
      font-size: 25px;
    }

    .gender_icon {
      position: absolute;
      top: 147px;
      left: 210px;
    }

    h5 {
      font-size: 20px;
      top: 147px;
      position: absolute;
      color: black;
    }

    .box_pokemon {
      align-items: center;
      justify-content: center;
      width: 615px;
      background-repeat: no-repeat, no-repeat;
      background-image: url(${display});
      background-position: bottom;
    }

    div {
      height: 435px;
      background-size: 350px;
      color: black;
      

      figure {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 65px;
        height: 200px;
        z-index:5;

        .btn_dir {
          background-image: url(${btn_dir});
          background-repeat: no-repeat, no-repeat;
          background-size: 60%;
          background-position: center;
        }
        .disabled {
          opacity: 0.4;
        }

        .btn_esq {
          background-image: url(${btn_esq});
          background-repeat: no-repeat, no-repeat;
          background-size: 60%;
          background-position: center;
        }

        button {
          width: 40px;
          height: 40px;
          cursor: pointer;
          border: none;
          background: none;
        }

        img {
          width: 60%;
          image-rendering: pixelated;
        }
      }
    }
  }
`;
