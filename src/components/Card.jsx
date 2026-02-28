import axios from "axios";
import { useEffect, useState } from "react";

export default function Card({ name, url }) {
  const [pokemonDetails, setPokemonDetails] = useState(undefined);

  function fetchPokemonDetails() {
    axios.get(url).then((response) => {
      const img = response.data.sprites.front_default;
      const type = response.data.types[0].type.name;
      setPokemonDetails({ img, type });
    });
  }

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <div className="col">
      <div className="card h-100 p-3 text-bg-secondary">
        {pokemonDetails && (
          <>
            <img src={pokemonDetails.img} className="card-img-top" alt="..." />
          </>
        )}
        <div className="card-body">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
}
