import "./App.css";

import { PokeAPI } from "pokeapi-types";

import { useState } from "react";
import useFetch from "./hooks/useFetch";

const endpoint = "https://pokeapi.co/api/v2/pokemon";

import ActionButtons from "./components/ActionButtons";
import PokemonCard from "./components/PokemonCard";
import PokemonError from "./components/PokemonError";

function App() {
  const [id, setId] = useState(1);
  const {
    data: pokemon,
    isLoading,
    error,
  } = useFetch<PokeAPI.Pokemon>(endpoint + "/" + id, {} as PokeAPI.Pokemon);

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
