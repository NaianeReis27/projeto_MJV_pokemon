import AppRoutes from "./routes/routes";
import Global from "./Global";
import ApiContextProvider from "./context/api.context";
import ModalPokedex from "./components/ModalPokedex";

function App() {
  return (
    <div className="App">
      <ApiContextProvider>
        <Global />
        <AppRoutes />
      </ApiContextProvider>
    </div>
  );
}

export default App;
