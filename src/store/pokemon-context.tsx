import { createContext } from "react";
import { PokeAPI } from "pokeapi-types";

const PokemonContext = createContext({ pokemon: {} as PokeAPI.Pokemon });

export default function PokemonContextProvider({ children }) {
  const pokemonContextStore = {};

  return (
    <PokemonContext.Provider value={pokemonContextStore}>
      {children}
    </PokemonContext.Provider>
  );
}
