import { PokeAPI } from "pokeapi-types";

import { JSX, createContext, useState } from "react";

import useFetch from "../hooks/useFetch";
const endpoint = "https://pokeapi.co/api/v2/pokemon";

export const PokemonContext = createContext({
  pokemon: {} as PokeAPI.Pokemon,
  togglePokemon: () => {},
});

export default function PokemonContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [id, setId] = useState(0);
  const { data, isLoading, error } = useFetch(`${endpoint}/${id}`);

  const pokemonContextStore = {
    pokemon: data,
    togglePokemon: togglePokemon,
  };

  return (
    <PokemonContext.Provider value={pokemonContextStore}>
      {children}
    </PokemonContext.Provider>
  );
}
