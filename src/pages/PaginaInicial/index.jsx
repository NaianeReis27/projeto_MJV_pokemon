import { Container, Inicio } from "./styles";
import cinturapoke from "../../assets/cinturapoke.png"
import { Button } from "../../styles/button";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import Jogo from "../Jogo";
import { useState } from 'react';



const PaginaInicial = () => {

    const[openGame,setOpenGame] = useState(false);


    
    
    return(
        !openGame ? (

            <Inicio>
    
        <NavBar styles={{ "background-color": "var(--main-color)" }}/>
    
            <div className="pokebola"/>
    
        <Container>
            <img src={cinturapoke} alt="" />
    
        </Container>
        <div className="alinhar-botao">
    
        <Button variant='primary' onClick={()=> setOpenGame(true)}> JOGAR ! </Button>
    
        </div>
    
    
        </Inicio>
        ) : <Jogo />

    )

        

}



export default PaginaInicial;