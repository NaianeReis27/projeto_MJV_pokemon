import { Container } from "./styles";
import Icon from "../../assets/pokebolaIcon.svg";
import { ApiContext } from "../../context/api.context";
import { useContext } from "react";

const Input = ({ styles }) => {

  const {inputChange, search} = useContext(ApiContext);

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
