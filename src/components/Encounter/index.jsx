import { useContext } from "react";
import { Container } from "./styles";
import { PokedexContext } from "../../context/pokedex.context";

const Encounter = () => {
   
  const {encounter} = useContext(PokedexContext);
  
  return (
    <Container>
      {
        <h3>{`${encounter?.names[1]?.name}...`}</h3>
      }
      
    </Container>
  );
};

export default Encounter;
