import { useContext, useEffect } from "react";
import Card from "./Card";
import { usePokedex } from "../contexts/PokedexContext";

export default function Pokedex() {
  const { fetchPokemon, goPrev, goNext, pokedex, pagination } = usePokedex();

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
