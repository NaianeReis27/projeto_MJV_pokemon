import { ApiContext } from "../../context/api.context";
import { useContext } from "react";
import { Container } from "./styles";
import InfoCard from "../InfoCard";


const CardSelect = () => {
  const { cardSelect } = useContext(ApiContext);

  return (
    <Container>
      {cardSelect && (
        <>
          <figure>
            <img src={cardSelect.sprites.front_default} alt="Icon_Pokebola" />
          </figure>
          <div>
            <h2>{cardSelect.name}</h2>
            <button>{cardSelect.types[0].type.name}</button>
            <h2>abilities</h2>
            <div>
              {
                cardSelect.abilities.map(ele=> <button className="ability">{ele.ability.name}</button>)
              }
            </div>
            
              {
                cardSelect.stats.map(ele=> <InfoCard data={ele} className="static"/>)
              }
           
          </div>
        </>
      )}
    </Container>
  );
};

export default CardSelect;
