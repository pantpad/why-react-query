import { useEffect, useState } from "react";
import "./App.css";
import ActionButtons from "./components/ActionButtons";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [id, setId] = useState(1);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data.sprites["front_default"]);
    }

    fetchPokemon();
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
