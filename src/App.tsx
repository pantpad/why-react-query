import { useEffect, useState } from "react";
import "./App.css";
import ActionButtons from "./components/ActionButtons";

const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`${pokemonAPI}${id}`)
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        setPokemon(resp.sprites["front_default"]);
      });
  }, [id]);

  return (
    <>
      <h1>Why react query?</h1>
      <article>
        <img src={`${pokemon ? pokemon : ""}`} alt={`pokemon n-${id}`} />
        <ActionButtons setId={setId} />
      </article>
    </>
  );
}

export default App;
