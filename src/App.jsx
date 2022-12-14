import AppRoutes from "./routes/routes";
import Global from "./Global";
import ApiContextProvider from "./context/api.context";
import ModalPokedex from "./components/ModalPokedex";
import PaginaInicial from "./pages/PaginaInicial";
import Sobre from "./pages/Sobre";
import LoginPage from "./pages/LoginPage";
import TreinadoraIsabella from "./components/TreinadoraIsabella";

function App() {
  return (
    <div className="App">
       <Global />
       <Sobre/>

     {/*<ApiContextProvider>
        <AppRoutes />
  </ApiContextProvider>*/}
    </div>
  );
}

export default App;
