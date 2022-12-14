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
    rgba(89, 242, 255, 1) 100%
  );
  border: solid var(--border-color) 6px;
  border-radius: 18px;

  .title_detalhes{
    text-align: center;
  }
  figure {
    height: 160px;
    display: flex;
    justify-content: center;
    cursor: pointer;

    .search{
      position: relative;
      font-size: 25px;
      right: 35px;
      left: 187px;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
    }
    img {
      height: 100%;
      image-rendering: pixelated;
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
