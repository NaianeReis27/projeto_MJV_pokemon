import styled from "styled-components";
import sprite from "../../assets/spritesheet.png"

export const Box = styled.div`

.sprite{
    width: ${({size})=> `${38*size}px`};
    height: ${({size})=> `${38*size}px`};
    background-image: url(${sprite});
    background-repeat: no-repeat;
    background-size: ${({size})=> `${240*size}px`};
}
   

.sprite-bug {
    background-position: ${({size})=> `${-5*size}px ${-5*size}px`}
   
}

.sprite-dark {
    background-position: ${({size})=> `${-53*size}px  ${-5*size}px`}
}

.sprite-dragon {
    background-position: ${({size})=> `${-101*size}px  ${-5*size}px`}
    
}

.sprite-electric {
    background-position: ${({size})=> `${-149*size}px  ${-5*size}px`}
}

.sprite-fairy {
    background-position: ${({size})=> `${-5*size}px  ${-53*size}px`}
}

.sprite-fighting {
    background-position: ${({size})=> `${-53*size}px ${-53*size}px`}
}

.sprite-fire {
    background-position: ${({size})=> `${-101*size}px  ${-53*size}px`}
}

.sprite-flying {
    background-position: ${({size})=> `${-149*size}px  ${-53*size}px`}
}

.sprite-ghost {
    background-position: ${({size})=> `${-5*size}px  ${-101*size}px`}
    
}

.sprite-grass {
    background-position: ${({size})=> `${-53*size}px  ${-101*size}px`}
}

.sprite-ground {
    background-position: ${({size})=> `${-101*size}px  ${-101*size}px`}
}

.sprite-ice {
    background-position: ${({size})=> `${-149*size}px  ${-101*size}px`}
}

.sprite-normal {
    background-position: ${({size})=> `${-5*size}px  ${-149*size}px`}
    
}

.sprite-poison {
    background-position: ${({size})=> `${-53*size}px  ${-149*size}px`}
}

.sprite-psychic {
    background-position: ${({size})=> `${-101*size}px  ${-149*size}px`}
    
}

.sprite-rock {
    background-position: ${({size})=> `${-149*size}px  ${-149*size}px`}
   
}

.sprite-steel {
    background-position: ${({size})=> `${-197*size}px  ${-5*size}px`}
}

.sprite-water {
    background-position: ${({size})=> `${-197*size}px  ${-53*size}px`}
}

  
`;
