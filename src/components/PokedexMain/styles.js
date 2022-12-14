import styled from "styled-components";
import pokedex from "../../assets/pokedex_body.svg"
export const Container = styled.div`
  display: flex;
  width: 1300px;
  height: 700px;
  margin: 50px auto 0 auto;
  justify-content: center;
  background-image: url(${pokedex});
  background-size: 100%;
  background-repeat: no-repeat;

`;
