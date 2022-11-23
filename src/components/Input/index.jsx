import { Container } from "./styles";
import Icon from "../../assets/pokebolaIcon.svg";

const Input = ({ styles }) => {
  return (
    <Container styles={styles}>
     <input placeholder="pesquisar..."/>
     <figure>
      <img src={Icon} alt="Icon_Pokebola" />
     </figure>
    </Container>
  );
};

export default Input;
