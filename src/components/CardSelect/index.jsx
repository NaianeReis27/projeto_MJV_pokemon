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
