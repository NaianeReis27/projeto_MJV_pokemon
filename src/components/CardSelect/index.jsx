import { ApiContext } from "../../context/api.context";
import { useContext } from "react";
import { Container } from "./styles";

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
            <button>Grama</button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CardSelect;
