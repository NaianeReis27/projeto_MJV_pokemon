import { Container } from "./styles";
import CardPokemon from "../CardPokedex";
import { useContext } from "react";
import { ApiContext } from "../../context/api.context";

const ListCards = ({ img }) => {
  const { cards } = useContext(ApiContext)
  return (
    <Container>
      {
        cards.map(ele => <CardPokemon key={ele.name} id={ele.name} data={ele}/>)
      }
    </Container>
  );
};

export default ListCards;
