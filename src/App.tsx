import "./App.css";

import { useState } from "react";
import { useFetchPokemon } from "./hooks/useFetchPokemon";

import ActionButtons from "./components/ActionButtons";
import PokemonCard from "./components/PokemonCard";
import PokemonError from "./components/PokemonError";

function App() {
  const [id, setId] = useState(1);
  const { pokemon, isLoading, error } = useFetchPokemon(id);

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
