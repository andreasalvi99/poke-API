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
    <>
      <Header />
      <section>
        <div className="layover">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
