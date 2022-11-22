import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Pokedex from "../pages/Pokedex";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/pokedex" element={<Pokedex/>} />
      <Route path="*" element={<Navigate replace to='/'/>}/>
    </Routes>
  );
};

export default AppRoutes;