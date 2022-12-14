import { Container } from "./styles";
import { useContext, useEffect, useState } from "react";
import { PokedexContext } from "../../context/pokedex.context";
import AbasDisplay from "../AbasDisplay";
// images
import fem from "../../assets/fem.png";
import mas from "../../assets/mas.png";
import who from "../../assets/who.png";

const ModalPokedex = () => {
  const { setModalPokedex, cardSelect, changeImage, listImage, index } = useContext(PokedexContext);
  const [isback, setIsBack] = useState(false);
  const [isFem, setIsFem] = useState(false);
  const [isBtnActiveEsq, setBtnActiveEsq] = useState(true);
  const [isBtnActiveDir, setBtnActiveDir] = useState(true);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setBtnActiveEsq(true);
    setBtnActiveDir(true);
    if (index == listImage.length - 1) {
      setBtnActiveEsq(false);
    }
    if (index == 0) {
      setBtnActiveDir(false);
    }
  }, [index, cardSelect]);

  useEffect(() => {
    setIsBack(false);
    setIsFem(false);
    if(listImage.length > 0){

      listImage[index].split("/").forEach((element) => {

        if (element == "back") {
          setIsBack(true);
        }
        if (element == "female") {
          setIsFem(true);
        }
      });
    }
  }, [index]);

  return (
   
    <Container>

      <figure className="barra">
           <button className="btn_close" onClick={() => setModalPokedex(false)}/> 
      </figure>

      <div className="box">
        <div className="box_pokemon">
          <h2>{cardSelect.name}</h2>
          <h5>{isback ? "back" : "front"}</h5>
          <img className="gender_icon" src={isFem ? fem : mas} />
          <figure>
            <button
              onClick={() => changeImage("previous")}
              className={isBtnActiveDir ? "btn_esq active" : "btn_esq disabled"}
            />
            {listImage.length > 0 &&  <img onLoad={() => setLoading(false)}  src={loading ? who : listImage[index]} alt="pokemon" />  }
            <button
              onClick={() => changeImage("next")}
              className={isBtnActiveEsq ? "btn_dir active" : "btn_dir disabled"}
            />

          </figure>

        </div>
        <AbasDisplay/>
        </div>
    </Container>
  );
};

export default ModalPokedex;
