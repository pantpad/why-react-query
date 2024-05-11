import { PokeAPI } from "pokeapi-types";
import { useEffect, useState } from "react";
import "./App.css";

import ActionButtons from "./components/ActionButtons";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [id, setId] = useState(1);

  const [pokemon, setPokemon] = useState<PokeAPI.Pokemon | null>(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPokemon() {
      setPokemon(null);
      setIsLoading(true);

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);

      setIsLoading(false);
    }

    fetchPokemon();
  }, [id]);

  return (
    <>
      <h1>Why react query?</h1>
      <PokemonCard isLoading={isLoading} data={pokemon} />
      <ActionButtons setId={setId} />
    </>
  );
}

export default App;
