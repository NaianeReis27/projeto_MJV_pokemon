import sprite_pokeball from "../../assets/ball_animation.png"
import styled, {keyframes} from 'styled-components'

const animate = keyframes`
  0% {
            background-position: 0;
  }
  100% {
            background-position: 256px;
  }
`;

export const Container = styled.div`
  transform: translate(-50%,-50%);
  width: 32px;
  height: 64px;
  background: url(${sprite_pokeball});
  position: relative;
  left: 50%;
  right: 50%;
  top: 30px;
  animation: ${animate} 1s steps(8) infinite
`;
