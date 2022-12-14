import styled from "styled-components";
import { fadeIn } from "../../Global";

export const Container = styled.ul`
  display: flex;
  gap: 10px;
  margin: 0 auto;

  .box_evolution {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 150px;

    .loading_img {
      width: 32px;
    }

    .pokemon_img {
      width: 70%;
      image-rendering: pixelated;
      animation: ${fadeIn} 0.7s;
    }

    .active {
      display: block;
    }
    
    .disable {
      display: none;
    }
    .box_icons {
      display: flex;
      margin: 170px auto 0 auto;
      height: 30px;
      width: 60px;
    }
    figure {
      margin: -200px 0 0 0;
      h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -40px;
        padding: 8px;
        border-radius: 50px;
        font-size: 15px;
        color: white;
      }

      img {
        width: 100%;
      }
    }
  }
`;
