import { Container } from "./styles";
import CardPokemon from "../CardPokedex";
import { useContext } from "react";
import { ApiContext } from "../../context/api.context";

const ListCards = ({ img }) => {
  const {cardsFilter, changePage } = useContext(ApiContext)
 
  return (
    <Container>
      {
        cardsFilter?.map((ele, index) => <CardPokemon key={index} data={ele}/>)
      }
      <div>
      <button className="btn_next"onClick={()=> changePage("previous")}>previous</button>
      <button className="btn_next" onClick={()=> changePage("next")}>next</button>
      
      </div>
    
    </Container>
  );
};

export default ListCards;
