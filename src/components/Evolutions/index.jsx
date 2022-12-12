import { useContext } from "react";
import { Container } from "./styles";
import { ApiContext } from "../../context/api.context";
import IconTypes from "../IconTypes";
const Evolutions = () => {
  const { evolutionsList } = useContext(ApiContext);
  
  return (
    <Container>
      {evolutionsList.length > 0 ? evolutionsList.sort((a,b) => a.id-b.id).map((ele) => (
        <li className="box_evolution">
          <div className="box_icons">
            {
              ele.types.map(ele => <IconTypes type={ele.type.name} size={0.7}/>)
            }
          </div>
          <figure >
            <h2>{ele.name}</h2>
            <img src={ele.sprites.front_default} alt="" />
          </figure>
        </li>
    )):
    <h4 className="text_evolution">Não evolui</h4>
    } 
    </Container>
  );
};

export default Evolutions;
