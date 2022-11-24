import styled from "styled-components";


export const Container = styled.ul`
  display: flex;
  max-width: 900px;
  gap: 16px;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  ${({ styles }) => styles}
  div{
    max-width: 400px;
    display: flex;
    justify-content:space-between;
    width: 100%;
    .btn_next{
      color: black;
    }
  }
`;
