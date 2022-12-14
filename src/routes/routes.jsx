import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Pokedex from "../pages/Pokedex";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import PaginaInicial from "../pages/PaginaInicial";
import Sobre from "../pages/Sobre"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/pokedex" element={<Pokedex/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/about" element={<Sobre />} />
      <Route path="*" element={<Navigate replace to='/'/>}/>
    </Routes>
  );
};

export default AppRoutes;