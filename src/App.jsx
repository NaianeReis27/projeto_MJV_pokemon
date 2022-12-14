import AppRoutes from "./routes/routes";
import {Global} from "./Global";
import PokedexContextProvider from "./context/pokedex.context";


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
