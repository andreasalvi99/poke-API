import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function Pokedex() {
  const [pagination, setPagination] = useState({
    next: null,
    prev: null,
  });

  const [pokedex, setPokedex] = useState([]);
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  function fetchPokemon(url = baseUrl) {
    axios.get(url).then((response) => {
      setPagination({
        next: response.data.next,
        prev: response.data.previous,
      });
      setPokedex(response.data.results);
    });
  }

  const goNext = () => {
    pagination.next && fetchPokemon(pagination.next);
  };
  const goPrev = () => {
    pagination.prev && fetchPokemon(pagination.prev);
  };

  useEffect(
    fetchPokemon,

    [],
  );

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <button
          className="btn btn-primary"
          onClick={goPrev}
          disabled={!pagination.prev}
        >
          Pagina precedente
        </button>
        <button
          className="btn btn-primary"
          onClick={goNext}
          disabled={!pagination.next}
        >
          Pagina successiva
        </button>
      </div>
      <div className="row row-cols-4 g-3">
        {pokedex.map((pokemon) => {
          return (
            <Card name={pokemon.name} key={pokemon.name} url={pokemon.url} />
          );
        })}
      </div>
    </>
  );
}
