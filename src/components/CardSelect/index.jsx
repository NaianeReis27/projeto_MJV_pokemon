import { PokedexContext } from "../../context/pokedex.context";
import { useContext } from "react";
import { Container } from "./styles";
import InfoCard from "../InfoCard";
import IconTypes from "../IconTypes";
import { ImSearch } from "react-icons/im";


const CardSelect = () => {
  const { cardSelect , setModalPokedex } = useContext(PokedexContext);
  
  return (
    <Container>
      {cardSelect && (
        <>
       
          <h3 className="title_detalhes">Detalhes</h3>
          <figure onClick={()=>{setModalPokedex(true)}}>
            <ImSearch className="search"/>
          <ul>
              {cardSelect.types.map((ele) => (
                <IconTypes size={1} type={ele.type.name}></IconTypes>
              ))}
            </ul>
            <img src={cardSelect.sprites.front_default} alt="Icon_Pokebola" />
          </figure>
          <div>
            <h2>{cardSelect.name}</h2>
            {cardSelect.stats.map((ele) => (
              <InfoCard data={ele} className="static" />
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default CardSelect;
