import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 196px;
  height: 243px;
  border: solid var(--blue-color) 2px;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 20px;
  cursor: pointer;
  background-color: aliceblue;

  &:hover{
    background-color: aqua;
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -30px 0 0 0;
    img {
      width: 80%;
      image-rendering: pixelated;
  
    }
  }

  div {
    margin: -10px 0 0 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap:5px;
    button {
      background-color: var(--blue-color);
      width: 90px;
      margin: 0 auto;
      border-radius: 20px;
      border: none;
      padding: 5px;
    }
    span,
    h2{
      text-align: center;
      color: var(--blue-color);
    }

  }
`;
