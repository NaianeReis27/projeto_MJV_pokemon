import styled from "styled-components";

export const Container = styled.div`

  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  margin: 0 auto;
  width: 1250px;
  height:60px;
  padding-right: 610px;
  gap: 15px;
  top: 790px;
  bottom: 0px;

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
