import axios from "axios";
import { createContext, useContext, useState } from "react";

const PokedexContext = createContext();

function PokedexProvider({ children }) {
  //^ Stato pokedex all'inizio
  const [pokedex, setPokedex] = useState([]);

  //^ Paginazione
  const [pagination, setPagination] = useState({
    next: null,
    prev: null,
  });

  //^ Funzione per la fetch dell'API
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

  //^ Funzioni per andare avanti e indietro nelle pagine
  const goNext = () => {
    pagination.next && fetchPokemon(pagination.next);
  };
  const goPrev = () => {
    pagination.prev && fetchPokemon(pagination.prev);
  };

  const contextValue = {
    pokedex,
    goNext,
    goPrev,
    fetchPokemon,
    pagination,
  };

  return (
    <PokedexContext.Provider value={contextValue}>
      {children}
    </PokedexContext.Provider>
  );
}

function usePokedex() {
  return useContext(PokedexContext);
}

export { usePokedex, PokedexProvider };
