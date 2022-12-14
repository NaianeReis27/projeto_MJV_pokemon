import AppRoutes from "./routes/routes";
import {Global} from "./Global";
import PokedexContextProvider from "./context/pokedex.context";
import Jogo from "./pages/Jogo";
import PaginaInicial from "./pages/PaginaInicial";
import Sobre from "./pages/Sobre";


function App() {
  return (
    <div className="App">
      <Global />

      <PaginaInicial/>
      {/*<PokedexContextProvider>
        <Global />
        <AppRoutes />
  </PokedexContextProvider>*/}
    </div>
  );
}

export default App;
