import { ApiContext } from "../../context/api.context";
import { useContext } from "react";
import { Container } from "./styles";
import InfoCard from "../InfoCard";
import IconTypes from "../IconTypes";

const CardSelect = () => {
  const { cardSelect , setModalPokedex } = useContext(ApiContext);
 
  return (
    <Container>
      {cardSelect && (
        <>
          <figure onClick={()=>{setModalPokedex(true)}}>
          <ul>
              {cardSelect.types.map((ele) => (
                <IconTypes size={1} type={ele.type.name}></IconTypes>
              ))}
            </ul>
            <img src={cardSelect.sprites.front_default} alt="Icon_Pokebola" />
          </figure>
          <div>
           
            <h2>{cardSelect.name}</h2>
            <h2>abilities</h2>
            <div>
              {cardSelect.abilities.map((ele) => (
                <button className="ability">{ele.ability.name}</button>
              ))}
            </div>
           
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
