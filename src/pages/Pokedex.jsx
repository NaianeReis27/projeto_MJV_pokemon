import NavBar from "../components/NavBar";
import Input from "../components/Input";
import PokedexMain from "../components/PokedexMain";
const Pokedex = () => {
  return (
    <>
      <NavBar styles={{ "background-color": "none", color: "#1F2773" }}/>
      <Input/>
      <PokedexMain/>
    </>
    
  );
};

export default Pokedex;
