import PokemonError from "./PokemonError";
import PokemonLoading from "./PokemonLoading";
import PokemonCard from "./PokemonCard";

import { useContext } from "react";
import { PokemonContext } from "../context/pokemon-context";

export default function Pokemon() {
  const { pokemon, error, isLoading } = useContext(PokemonContext);

  if (error) return <PokemonError />;
  if (isLoading) return <PokemonLoading />;

  return <PokemonCard data={pokemon} />;
}
