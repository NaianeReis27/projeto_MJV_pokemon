import { Container } from "./styles";
import { ApiContext } from "../../context/api.context";
import { useContext, useEffect, useState } from "react";
import IconTypes from "../IconTypes";
import AnimationGif from "../AnimationGif";

const CardPokemon = ({ data, index }) => {
  const { chooseCard, loadingImg } = useContext(ApiContext);

  const [animateRandom, setAnimateRandom] = useState(null);
  useEffect(() => {
    setAnimateRandom(Math.floor(Math.random() * 4));
  }, []);

  return (
    <Container
      animateRandom={animateRandom}
      onClick={() => chooseCard(data.id)}
    >
      {!loadingImg ? (
        <>
          <figure>
            <img src={data.sprites.front_default} alt="pokemon" />
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
        </>
      ):
      <AnimationGif/>
      }
    </Container>
  );
};

export default CardPokemon;
