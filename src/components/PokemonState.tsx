import { PokeAPI } from "pokeapi-types";

import { useFetch } from "../context/fetch-context";

const endpoint = "https://pokeapi.co/api/v2/pokemon";

import PokemonError from "./PokemonError";
import PokemonLoading from "./PokemonLoading";
import Pokemon from "./Pokemon";

export default function PokemonState({ id }: { id: number }) {
  const { data, isLoading, error } = useFetch<PokeAPI.Pokemon>(
    endpoint + "/" + id,
    {} as PokeAPI.Pokemon
  );

  if (error) return <PokemonError />;
  if (isLoading) return <PokemonLoading />;

  return <Pokemon data={data} />;
}