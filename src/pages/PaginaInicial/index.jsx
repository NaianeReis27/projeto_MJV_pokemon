import { Container, Inicio } from "./styles";
import cinturapoke from "../../assets/cinturapoke.png"
import { Button } from "../../Styles";
import NavBar from "../../components/NavBar";



const PaginaInicial = () => {


    
    
    return(
        
        
        <Inicio>

    <NavBar styles={{ "background-color": "var(--main-color)" }}/>

        <div className="pokebola"/>

    <Container>
        <img src={cinturapoke} alt="" />

    </Container>
    <div className="alinhar-botao">

    <Button variant='primary'> JOGAR !</Button>

    </div>


    </Inicio>
    )

}



export default PaginaInicial;