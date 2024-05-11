import "./App.css";

import { useState } from "react";

const endpoint = "https://pokeapi.co/api/v2/pokemon";

import ActionButtons from "./components/ActionButtons";
import PokemonCard from "./components/PokemonCard";
import PokemonError from "./components/PokemonError";
import useFetch from "./hooks/useFetch";

function App() {
  const [id, setId] = useState(1);
  const { data: pokemon, isLoading, error } = useFetch(endpoint + "/" + id);

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
