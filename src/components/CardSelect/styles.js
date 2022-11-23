import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  position: sticky;
  bottom:60px;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  height: 560px;
  width: 100%;
  border: solid var(--blue-color) 2px;
  margin: 0 auto;
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

  img{
    margin-top: -130px;
    width: 250px;
    image-rendering: pixelated;
   
    @media (max-width: 1366px) {
      margin-top: 0;
      width: 200px;
    }
  }

  div{
    margin-top: -25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  span,h2,button{
    text-align: center;
    color:var(--blue-color)
  }
  
`;
