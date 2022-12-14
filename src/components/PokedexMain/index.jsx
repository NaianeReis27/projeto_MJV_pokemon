import { Container } from "./styles";
import CardSelect from "../CardSelect";
import ListCards from "../ListCards";
import ModalPokedex from "../ModalPokedex";
import { useContext } from "react";
import { PokedexContext } from "../../context/pokedex.context";
import ButtonsSvg from "../ButtonsSvg";

const PokedexMain = () => {
  const { modalPokedex } = useContext(PokedexContext);
  return (
    <>
      <Container>
        {modalPokedex ? <ModalPokedex /> : <ListCards />}
        <CardSelect />
      </Container>
      <ButtonsSvg />
    </>
  );
};

export default PokedexMain;
