import styled from "styled-components";
import { keyframes } from "styled-components";
import pokebola from "../../assets/pokebola.svg";

const slideTop = keyframes`
  0% {
            opacity: 0;
  }
  100% {
            opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  padding: 15px 0px 15px 0;
  animation-name: ${slideTop};
  ${({ styles }) => styles}

  div {
    max-width: 1326px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px 0 10px;
    @media (max-width: 715px) {
      justify-content: center;
    }

    ul {
      max-width: 400px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      flex-wrap: wrap;

      li:hover::before {
        visibility: visible;
        transition: 1.5;
      }

      li::before {
        background: url(${pokebola}) no-repeat;
        position: absolute;
        content: " ";
        height: 25px;
        width: 25px;
        visibility: hidden;
      }

      a {
        padding-left: 20px;
        text-decoration: none;
        ${({ styles }) => styles}
        font-weight: 600;
      }
    }
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 70px;
    img {
      width: 80%;
      @media (max-width: 715px) {
        width: 70%;
      }
    }
  }
`;
