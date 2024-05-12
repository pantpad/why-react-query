import { createContext } from "react";

const PokemonContext = createContext({});

export default function PokemonContextProvider({ children }) {
  const pokemonContextStore = {};

  return (
    <PokemonContext.Provider value={pokemonContextStore}>
      {children}
    </PokemonContext.Provider>
  );
}
