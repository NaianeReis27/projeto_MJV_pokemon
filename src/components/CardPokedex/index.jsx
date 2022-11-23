import { Container } from "./styles";
import { ApiContext } from "../../context/api.context";
import { useContext } from "react";

const CardPokemon = ({ data }) => {
  const { chooseCard } = useContext(ApiContext);

  return (
    <Container onClick={() => chooseCard(data.id)}>
      <figure>
        <img src={data.sprites.front_default} alt="Icon_Pokebola" />
      </figure>
      <div>
        <span>{`Num ${data.id}`}</span>
        <h2>{data.name}</h2>
        <button>Grama</button>
      </div>
    </Container>
  );
};

export default CardPokemon;