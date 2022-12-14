import { Container } from "./styles";
import CardPokemon from "../CardPokedex";
import gif from "../../assets/pokemon_loading.webp"
import { useContext } from "react";
import { PokedexContext } from "../../context/pokedex.context";

const ListCards = ({ img }) => {
  const {cardsFilter,loading} = useContext(PokedexContext)
  return (
    
    <Container>
      {
        !loading?
        cardsFilter.sort((a,b)=> a.id- b.id)?.map((ele, index) => <CardPokemon key={index} index={index} data={ele}/>)
        :
        <div className="box_loading">
          <img src={gif} alt="gif_pokemon"/>
          <h4>loading...</h4>
        </div>
      }
    </Container>
    
   
  );
};

export default ListCards;
