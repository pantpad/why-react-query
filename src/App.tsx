import { PokeAPI } from "pokeapi-types";
import { useEffect, useState } from "react";
import "./App.css";

import ActionButtons from "./components/ActionButtons";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemon, setPokemon] = useState<PokeAPI.Pokemon | null>(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    setPokemon(null);

    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    }

    fetchPokemon();
  }, [id]);

  return (
    <>
      <h1>Why react query?</h1>
      <PokemonCard data={pokemon} />
      <ActionButtons setId={setId} />
    </>
  );
}

export default App;
