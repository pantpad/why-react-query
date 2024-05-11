import { PokeAPI } from "pokeapi-types";
import { useEffect, useState } from "react";
import "./App.css";

import ActionButtons from "./components/ActionButtons";
import PokemonCard from "./components/PokemonCard";
import PokemonError from "./components/PokemonError";

function App() {
  const [id, setId] = useState(1);

  const [pokemon, setPokemon] = useState<PokeAPI.Pokemon | null>(null);
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPokemon() {
      setIsLoading(true);
      try {
        setPokemon(null);
        setError(false);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!response.ok) {
          throw new Error("Error getting pokemon");
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    }

    fetchPokemon();
  }, [id]);

  return (
    <>
      <h1>Why react query?</h1>
      {error ? (
        <PokemonError />
      ) : (
        <PokemonCard isLoading={isLoading} data={pokemon} />
      )}
      <ActionButtons setId={setId} />
    </>
  );
}

export default App;
