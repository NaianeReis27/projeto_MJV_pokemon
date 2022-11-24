import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  max-width: 400px;
  justify-content: space-between;
  border: solid var(--blue-color) 2px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
  ${({ styles }) => styles}
  
  input{
    width: 100%;
    display: flex;
    color: var(--blue-color);
    border: none;
    padding: 0 15px;
  }

  button {
    display: flex;
    justify-content: center;
    border: none;
    background: none;
    align-items: center;
    width: 45px;
    height: 45px;
    cursor: pointer;
    img{
      width: 140%;
      cursor: pointer;
    }
  }
`;
