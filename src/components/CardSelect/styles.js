import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: sticky;
  top: 15%;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  height: 600px;
  width: 100%;
  border: solid var(--blue-color) 2px;
  border-radius: 20px;

  @media (max-width: 1366px) {
    flex-direction: row;
    max-width: 600px;
    padding: 20px;
    justify-content: space-between;
    height: 300px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    max-width: 600px;
    padding: 20px;
    justify-content: space-evenly;
  }
  figure {
    display: flex;
    justify-content: center;
    img {
      margin-top: -130px;
      width: 250px;
      image-rendering: pixelated;

      @media (max-width: 1366px) {
        margin-top: 0;
        width: 200px;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: -10px;
    
    div {
      flex-direction: row;

      .ability {
        flex-direction: row;
        display: flex;
        padding: 8px;
        color: #000000;
        background: none;
        border: 1px solid #5e9067;
        border-radius: 20px;
        margin: 5px;
      }
    }
  }

  button {
    padding: 8px;
    color:white;
    background: #5e9067;
    border: none;
    border-radius: 20px;
    font-weight: 600px;
  }

  span,
  h2{
    text-align: center;
    color: var(--blue-color);
  }
`;
