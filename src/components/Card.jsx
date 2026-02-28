import axios from "axios";
import { useEffect, useState } from "react";

export default function Card({ name, url }) {
  const [pokemonDetails, setPokemonDetails] = useState();

  function fetchPokemonDetails() {
    axios.get(url).then((response) => {
      console.log(response.data);
      const img = response.data.sprites.front_default;
      console.log(img);

      const type = response.data.types[0].type.name;
      setPokemonDetails({ img, type });
      console.log(pokemonDetails);
    });
  }

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <div className="col">
      <div className="card">
        <img src={pokemonDetails.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
}
