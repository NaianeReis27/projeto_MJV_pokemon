import styled, { keyframes } from "styled-components";

const text = keyframes`
  50% {
            opacity: 0;
  }
`;

export const Container = styled.ul`
  display: flex;
  height: 472px;
  gap: 16px;
  flex-wrap: wrap;
  margin: 0 auto;
  overflow-y: auto;
  padding: 12px;
  justify-content: center;
  width: 856px;
  left: 0px;
  position: relative;
  top: 119px;
  border: solid var(--border-color) 6px;

  &::-webkit-scrollbar {
    display: none;
  }

  div {
    img {
      width: 200px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
      text-align: center;
      color: black;
      font-size: 22px;
      animation: ${text} 1.5s ease-in-out infinite;
    }
  }
`;
