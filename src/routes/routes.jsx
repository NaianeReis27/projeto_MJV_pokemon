import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { LandingPage } from "../pages/landingPage";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="*" element={<Navigate replace to='/'/>}/>
    </Routes>
  );
};