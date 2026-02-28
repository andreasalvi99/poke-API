import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Pokedex from "./components/Pokedex";
import DefaultLayout from "./layouts/DefaultLayout";
import { PokedexProvider } from "./contexts/PokedexContext";

export default function App() {
  return (
    <PokedexProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/pokedex" Component={Pokedex} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PokedexProvider>
  );
}
