import { useContext } from "react";
import { Container } from "./styles";
import { PokedexContext } from "../../context/pokedex.context";
import { useState } from "react";
import { useEffect } from "react";
const Abilities = ({ data }) => {
  
  const { getAbilities } = useContext(PokedexContext);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    getAbilities(data.ability.name, setDescription);
  }, []);

  console.log(description);
  return (
    description && (
      <Container>
        <h3>{data.ability.name}</h3>
        <p>{description}</p>
      </Container>
    )
  );
};

export default Abilities;
