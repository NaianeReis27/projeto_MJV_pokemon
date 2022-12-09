import styled from "styled-components";


export const Container = styled.ul`
  display: flex;
  max-width: 854px;
  position: absolute;
  top: 313px;
  bottom:0 ;
  left:-372px;
  right: 0;
  height: 472px;
  gap: 16px;
  flex-wrap: wrap;
  margin: 0 auto;
  overflow-y: auto;
  padding: 12px;
  justify-content: center;
  border: solid #a80003 6px;

  &::-webkit-scrollbar {
   display: none;
  }

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
