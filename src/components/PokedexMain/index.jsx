import { Container } from "./styles";
import CardSelect from "../CardSelect";
import ListCards from "../ListCards";

const PokedexMain = () => {
  return (
    <Container>
      <ListCards/>
      <CardSelect/>
    </Container>
  );
};

export default PokedexMain;
