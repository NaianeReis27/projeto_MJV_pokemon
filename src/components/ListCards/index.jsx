import { Container } from "./styles";
import CardPokemon from "../CardPokedex";
import { useContext } from "react";
import { ApiContext } from "../../context/api.context";

const ListCards = ({ img }) => {
  const {cardsFilter,loading, modalPokedex } = useContext(ApiContext)
  return (
    
    <Container>
      {
        !loading?
        cardsFilter?.map((ele, index) => <CardPokemon key={index} index={index} data={ele}/>)
        :
        <h5>loading...</h5>
      }
    </Container>
    
   
  );
};

export default ListCards;
