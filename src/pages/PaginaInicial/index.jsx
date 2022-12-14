import { Container, Inicio } from "./styles";
import cinturapoke from "../../assets/cinturapoke.png"
import { Button } from "../../Styles";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";



const PaginaInicial = () => {
    const navigate = useNavigate();
    const gameRoute = () => {
        navigate('/game')
    }

     
    
    return(
      

            <Inicio>
    
        <NavBar styles={{ "background-color": "var(--main-color)" }}/>
    
            <div className="pokebola"/>
    
        <Container>
            <img src={cinturapoke} alt="" />
    
        </Container>
        <div className="alinhar-botao">

    
        <Button variant='primary' onClick={gameRoute}> JOGAR ! </Button>
    
        </div>
    
    
        </Inicio>
     

    )

        

}



export default PaginaInicial;