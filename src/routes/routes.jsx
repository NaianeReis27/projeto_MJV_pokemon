import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Pokedex from "../pages/Pokedex";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/pokedex" element={<Pokedex/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="*" element={<Navigate replace to='/'/>}/>
    </Routes>
  );
};

export default AppRoutes;