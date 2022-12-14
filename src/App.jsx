import AppRoutes from "./routes/routes";
import {Global} from "./Global";
import PokedexContextProvider from "./context/pokedex.context";
import PaginaInicial from "./pages/PaginaInicial";
import Sobre from "./pages/Sobre";
import LoginPage from "./pages/LoginPage";
import TreinadoraIsabella from "./components/TreinadoraIsabella";


function App() {
  return (
    <div className="App">
      <PokedexContextProvider>
        <Global />
        <AppRoutes />
      </PokedexContextProvider>
    </div>
  );
}

export default App;
