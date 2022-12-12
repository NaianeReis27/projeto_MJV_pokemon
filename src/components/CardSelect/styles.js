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
      cursor:zoom-in
    }
  }
  div{
    h2{
      margin-top: -25px;
      text-align: center;
      font-size: 25px;
    }
  }
`;
