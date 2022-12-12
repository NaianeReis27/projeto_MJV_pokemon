
import styled, { keyframes } from 'styled-components'


export const Container = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 250px;
  padding: 15px;
  border: solid var(--blue-color) 2px;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  

  &:hover {
    background-color: var(--yellow-color);
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -30px 0 0 0;
    img {
      width: 70%;
      image-rendering: pixelated;
    }
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5px;

    button {
      background-color: var(--blue-color);
      width: 90px;
      margin: 0 auto;
      border-radius: 20px;
      border: none;
      padding: 5px;
    }
    span,
    
    h2 {
      text-align: center;
      color: var(--blue-color);
    }
    div{
      max-width: none;
      width: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .icons{
        width: 10px;
      }

    }
  }
`;
