import NavBar from "../components/NavBar";
import Input from "../components/Input";
import ListCards from "../components/ListCards";
import CardSelect from "../components/CardSelect";
import PokedexMain from "../components/PokedexMain";
const Pokedex = () => {
  return (
    <>
      <NavBar styles={{ "background-color": "none", color: "#1F2773" }}></NavBar>
      <Input/>
      <PokedexMain/>
  
    </>
    
  );
};

export default Pokedex;
