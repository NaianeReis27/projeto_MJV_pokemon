import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 300px;
  flex-direction: column;
  position: absolute;
  top: 280px;
  left: 0px;
  right: -958px;
  height: 503px;
  gap: 16px;
  margin: 0 auto;
  padding: 12px;
  justify-content: center;
  background: rgb(64, 99, 200);
  background: linear-gradient(
    24deg,
    rgba(64, 99, 200, 1) 0%,
    rgba(89, 243, 255, 1) 100%
  );
  border: solid #a80003 6px;
  border-radius: 18px;

  figure {
    height: 160px;
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
    }
    img {
      height: 100%;
      image-rendering: pixelated;
      cursor: pointer;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

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
    color: white;
    background: #5e9067;
    border: none;
    border-radius: 20px;
    font-weight: 600px;
  }

  span,
  h2 {
    text-align: center;
    color: white;
    font-size: 16px;
  }
`;
