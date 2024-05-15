import { PokeAPI } from "pokeapi-types";

import { JSX, createContext, useState } from "react";

import useFetch from "../hooks/useFetch";
const endpoint = "https://pokeapi.co/api/v2/pokemon";

export const PokemonContext = createContext({
  pokemon: {} as PokeAPI.Pokemon,
  isLoading: false,
  error: null,
  handleNext: () => {},
  handlePrev: () => {},
});

export default function PokemonContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [id, setId] = useState(1);
  const { data, isLoading, error } = useFetch(
    `${endpoint}/${id}`,
    {} as PokeAPI.Pokemon
  );

  function handleNext() {
    setId((prev) => {
      if (prev === 1025) return 1;
      return ++prev;
    });
  }
  function handlePrev() {
    setId((prev) => {
      if (prev === 1) return 1025;
      return --prev;
    });
  }

  const pokemonContextStore = {
    pokemon: data,
    isLoading,
    error,
    handleNext,
    handlePrev,
  };

  return (
    <PokemonContext.Provider value={pokemonContextStore}>
      {children}
    </PokemonContext.Provider>
  );
}
