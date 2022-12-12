import { useContext } from "react";
import { Container } from "./styles";
import { ApiContext } from "../../context/api.context";

const Encounter = () => {
   
  const {encounter} = useContext(ApiContext);
  
  return (
    <Container>
      {
        <h3>{`${encounter?.names[1]?.name}...`}</h3>
      }
      
    </Container>
  );
};

export default Encounter;
