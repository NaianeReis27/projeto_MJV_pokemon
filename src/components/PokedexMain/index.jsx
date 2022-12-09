import { Container } from "./styles";
import CardSelect from "../CardSelect";
import ListCards from "../ListCards";
import PokedexSvg from "../PokedexSvg";

const PokedexMain = () => {

  return (
    <Container>
      <ListCards />
      <CardSelect />
      <PokedexSvg/>
    </Container>
  );
};

export default PokedexMain;
