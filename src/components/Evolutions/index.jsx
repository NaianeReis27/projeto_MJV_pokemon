import { useContext, useState } from "react";
import { Container } from "./styles";
import { PokedexContext } from "../../context/pokedex.context";
import IconTypes from "../IconTypes";
import icon from "../../assets/icon_loading.gif";

const Evolutions = () => {

  const { evolutionsList } = useContext(PokedexContext);
  const [loading, setLoading] = useState(true);


  return (
    <Container>
      {evolutionsList.length > 0 ? (
        evolutionsList.sort((a,b)=> a.id - b.id)
          .map((ele) => (
            <li className="box_evolution">
              <div className="box_icons">
                {ele.types.map((ele) => (
                  <IconTypes type={ele.type.name} size={0.7} />
                ))}
              </div>
              <figure>
                <h2>{ele.name}</h2>
                <img
                  className={
                    loading ? "loading_img active" : "pokemon_img disable"
                  }
                  src={icon}
                  alt="pokemon"
                />
                <img
                  onLoad={() => {
                    setLoading(false);
                  }}
                  className={
                    loading ? "pokemon_img disable" : "pokemon_img active"
                  }
                  src={ele.sprites.front_default}
                  alt="pokemon"
                />
              </figure>
            </li>
          ))
      ) : (
        <h4 className="text_evolution">Não evolui</h4>
      )}
    </Container>
  );
};

export default Evolutions;
