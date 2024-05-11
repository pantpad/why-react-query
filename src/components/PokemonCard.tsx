import { PokeAPI } from "pokeapi-types";

import PokemonError from "./PokemonError";
import PokemonLoading from "./PokemonLoading";

type PokemonCardType = {
  data: PokeAPI.Pokemon;
  isLoading: boolean;
  error: any;
};

export default function PokemonCard({
  data,
  isLoading,
  error,
}: PokemonCardType) {
  if (error) return <PokemonError />;
  if (isLoading) return <PokemonLoading />;

  return (
    <article className="card">
      <figure>
        <img
          width="100px"
          height="100px"
          src={data?.sprites?.front_default}
          alt={data?.name}
        />
      </figure>
      <figcaption>
        <h4>{data?.name}</h4>
        <h6>No. {data?.id}</h6>
      </figcaption>
    </article>
  );
}
