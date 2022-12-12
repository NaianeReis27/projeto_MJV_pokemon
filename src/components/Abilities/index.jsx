import { useContext } from "react";
import { Container } from "./styles";
import { ApiContext } from "../../context/api.context";
import { useState } from "react";
import { useEffect } from "react";
const Abilities = ({ data }) => {
  const { getAbilities } = useContext(ApiContext);
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
