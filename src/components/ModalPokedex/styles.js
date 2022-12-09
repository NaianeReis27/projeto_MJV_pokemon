import styled from "styled-components";
import display from "../../assets/display.svg";
import btn_dir from "../../assets/btn_dir.svg"
import btn_esq from "../../assets/btn_esq.svg"
export const Container = styled.div`
  position: absolute;
  width: 847px;
  height: 470px;
  background-color: var(--white-color);
  top: 312px;
  right: 374px;
  left: 0px;
  z-index: 1;
  margin: 0 auto;

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

  div {
    display: flex;
    justify-content: center;
    margin-top: -24px;
    gap: 5px;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;

    .box_pokemon {
      z-index:0;
      align-items: center;
      justify-content: center;
      width: 615px;
      background-repeat: no-repeat, no-repeat;
      background-image: url(${display});
      background-position: bottom;
    }

    div {
      height: 435px;
      background-color: var(--yellow-color);
      background-size: 350px;
      color: black;

      figure {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 65px;
        height: 200px;

        .btn_dir{
          background-image: url(${btn_dir});
          background-repeat: no-repeat, no-repeat;
          background-size: 60%;
          background-position: center;
          border: none;
        }

        .btn_esq{
          background-image: url(${btn_esq});
          background-repeat: no-repeat, no-repeat;
          background-size: 60%;
          background-position: center;
          border: none;
        }

        button {
          background:none;
          width: 40px;
          height: 40px;
          z-index: 99999;
          cursor: pointer;
        }

        img {
          width: 60%;
          image-rendering: pixelated;
        }
      }
    }
  }
`;
