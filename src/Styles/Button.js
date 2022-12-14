import styled, { css } from "styled-components";


const ButtonStyled = {
  
    primary: css`
    width: 200px;
    height: 100px;
    background:#1F2773;
;
    color: var(--font-color);
    font-weight: 500;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-size:30px;
    

    `,

    secundary: css`
     background: var(--color-error);
     width: 290px;
     height: 45px;

    `,
  

}


export const Button = styled.button `


${({ variant }) => ButtonStyled[variant]}
display: flex;
align-items: center;
justify-content: center;

background:#1F2773;
color: #F2E6FA;
font-weight: 500;




`