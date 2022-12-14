import { Container } from "./styles";

const InputPixel = ({label, type}) => {
  return (
    <Container>
      <label>{label}</label>
      <input type={type}/>
    </Container>
  );
};

export default InputPixel;
