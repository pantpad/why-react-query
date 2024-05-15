import { JSX, createContext, useState } from "react";
import { PokeAPI } from "pokeapi-types";

export const PokemonContext = createContext({
  pokemon: false,
  togglePokemon: () => {},
});

export default function PokemonContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [pokemon, setPokemon] = useState(false);

  function togglePokemon() {
    setPokemon((prev) => !prev);
  }

  const pokemonContextStore = {
    pokemon: pokemon,
    togglePokemon: togglePokemon,
  };

  return (
    <PokemonContext.Provider value={pokemonContextStore}>
      {children}
    </PokemonContext.Provider>
  );
}
