import { Navigate, Route, Routes } from "react-router-dom";
import Pokedex from "../pages/Pokedex";
import PaginaInicial from "../pages/PaginaInicial";
import Sobre from "../pages/Sobre"
import Jogo from "../pages/Jogo";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/game" element={<Jogo />} />
      <Route path="/pokedex" element={<Pokedex/>} />
      <Route path="/about" element={<Sobre />} />
      <Route path="*" element={<Navigate replace to='/'/>}/>
    </Routes>
  );
};

export default AppRoutes;