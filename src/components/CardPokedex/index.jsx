import { Container } from "./styles";
import { ApiContext } from "../../context/api.context";
import { useContext, useEffect, useState } from "react";
import IconTypes from "../IconTypes";

const CardPokemon = ({ data, index }) => {
  const { chooseCard } = useContext(ApiContext);

  const [animateRandom, setAnimateRandom] = useState(null);
  useEffect(() => {
    setAnimateRandom(Math.floor(Math.random() * 4));
  }, []);

  return (
    <Container
      animateRandom={animateRandom}
      onClick={() => chooseCard(data.id)}
    >
      <figure>
        <img src={data.sprites.front_default} alt="Icon_Pokebola" />
      </figure>
      <div>
        <span>{`Num ${data.id}`}</span>
        <h2>{data.name}</h2>
        <div>
          {data.types.map((ele) => (
            <IconTypes size={0.7} type={ele.type.name}></IconTypes>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CardPokemon;
