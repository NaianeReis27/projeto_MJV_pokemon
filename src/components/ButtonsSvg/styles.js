import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  flex-direction: row-reverse;
  width: 1300px;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 0 0 0 250px;
  height:60px;
  gap: 15px;
  top:-105px;
  svg {
    fill: none;
    cursor: pointer;
  }
  .btn_pokedex{
    &:hover{
      fill: #48B2F8;
    }
  }
`;
