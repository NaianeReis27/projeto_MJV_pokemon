import styled from "styled-components";


export const Container = styled.ul`
  display: flex;
  max-width: 900px;
  gap: 16px;
  flex-wrap: wrap;
  margin: 0 auto;
  ${({ styles }) => styles}

`;
