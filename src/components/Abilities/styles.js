import styled from "styled-components";

export const Container = styled.div`
  border-bottom: solid 1px black;
  padding: 0px 45px;
  justify-content: flex-start;
  gap: 20px;
  
  h3{
    white-space: nowrap;
  }

  h3,p{
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 10;
  }
  
`;
