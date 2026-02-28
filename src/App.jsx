import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Pokedex from "./components/Pokedex";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/pokedex" Component={Pokedex} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
