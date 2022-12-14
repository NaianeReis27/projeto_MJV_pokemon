import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  display: flex;
  width: 300px;
  flex-direction: column;
  top: 116px;
  right: 0;
  left: 0px;
  right: 0px;
  height: 475px;
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
  border: solid var(--border-color) 6px;
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
