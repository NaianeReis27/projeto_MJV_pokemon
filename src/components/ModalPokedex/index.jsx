import { Container } from "./styles";
import Close from "../Close";
import barra from "../../assets/barra.svg";
import { useContext } from "react";
import { ApiContext } from "../../context/api.context";

const ModalPokedex = () => {

  const { setModalPokedex, cardSelect } = useContext(ApiContext);

  return (
    <Container>
      <figure>
        <img src={barra} alt="" srcset="" />
        <button onClick={() => setModalPokedex(false)}>
          <Close/>
        </button>
      </figure>

      <div>
        <div className="box_pokemon">
          <figure>
            <button className="btn_esq"/>
            <img src={cardSelect.sprites.front_default} alt="" srcset="" />
            <button className="btn_dir"/>
          </figure>
        </div>
        <div>Informações do pokémon</div>
      </div>
    </Container>
  );
};

export default ModalPokedex;
