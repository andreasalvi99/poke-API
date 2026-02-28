import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Pokedex from "./components/Pokedex";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={HomePage} />
        <Route path="/pokedex" Component={Pokedex} />
      </Routes>
    </BrowserRouter>
  );
}
