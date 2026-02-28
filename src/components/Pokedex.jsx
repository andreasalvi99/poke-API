import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function Pokedex() {
  const [pokedex, setPokedex] = useState([]);

  function fetchPokemon() {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
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
          <Card name={pokemon.name} key={pokemon.name} url={pokemon.url} />
        );
      })}
    </div>
  );
}
