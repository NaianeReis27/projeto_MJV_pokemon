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

     border: none;
     border-radius: 5px;
     box-shadow: 0 1px 3px rgba();
     background-color: var(--color-secundary);
     color: #ffffff;
     font-size: 1.2rem;
     cursor:pointer;


      :hover{
       padding: 0.8rem 1.5rem;
       border: 1px solid #ffffff;
       border-radius: 5px;
       box-shadow: 0 1px 3px rgba();
       font-size: 1.2rem;

}

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
