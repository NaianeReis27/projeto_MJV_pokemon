import { Container } from "./styles";
import Abilities from "../Abilities";
import { useContext, useState } from "react";
import { ApiContext } from "../../context/api.context";
import Evolutions from "../Evolutions/index";
import Encounter from "../Encounter/index";

const AbasDisplay = () => {
  const { cardSelect } = useContext(ApiContext);

  const [zindex, setZindex] = useState(true);

  const index = () => {
    if (zindex) {
      setZindex(false);
    } else {
      setZindex(true);
    }
  };
  return (
    <Container zindex={zindex}>
      <div className="box">
        <button onClick={index} className="ability">
          abilities
        </button>
        <button onClick={index} className="ability">
          encounter
        </button>
      </div>
      <Evolutions />
      <div className="aba aba2">
        <div className="box_text">
          {cardSelect.abilities.map((element) => (
            <Abilities data={element} />
          ))}
        </div>
      </div>
      <div className="aba aba1">
        <div className="box_text">
          <Encounter/>
        </div>
      </div>
    </Container>
  );
};

export default AbasDisplay;
