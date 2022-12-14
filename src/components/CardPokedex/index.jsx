import { Container } from "./styles";
import { PokedexContext } from "../../context/pokedex.context";
import { useContext, useState } from "react";
import IconTypes from "../IconTypes";
import icon from "../../assets/icon_loading.gif";

const CardPokemon = ({ data }) => {
  const { chooseCard } = useContext(PokedexContext);
  const [loading, setLoading] = useState(true);

  return (
    <Container onClick={() => chooseCard(data.id)}>
      <>
        <figure>
          <img
            className={loading ? "loading_img active" : "pokemon_img disable"}
            src={icon}
            alt="pokemon"
          />
          <img
            onLoad={() => {
              setLoading(false);
            }}
            className={loading ? "pokemon_img disable" : "pokemon_img active"}
            src={data.sprites.front_default}
            alt="pokemon"
          />
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
    </Container>
  );
};

export default CardPokemon;
