import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

export default function Pokedex() {
  const [pokedex, setPokedex] = useState([]);

  function fetchPokemon() {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
      console.log(response.data.results);
      setPokedex(response.data.results);
    });
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="row row-cols-4 g-3">
      {pokedex.map((pokemon) => {
        return (
          <div key={pokemon.name} className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h2>{pokemon.name}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
