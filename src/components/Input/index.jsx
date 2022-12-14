import { Container } from "./styles";
import Icon from "../../assets/pokebolaIcon.svg";
import { PokedexContext } from "../../context/pokedex.context";
import { useContext } from "react";

const Input = ({ styles }) => {

  const {inputChange} = useContext(PokedexContext);

  return (
    <Container styles={styles}>
     <input onChange={inputChange} placeholder="pesquisar..."/>
     <button>
      <img src={Icon} alt="Icon_Pokebola" />
     </button>
    </Container>
  );
};

export default Input;
