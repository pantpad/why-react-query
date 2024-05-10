import { PokeAPI } from "pokeapi-types";

type PokemonCardType = {
  data: PokeAPI.Pokemon | null;
};

export default function PokemonCard({ data }: PokemonCardType) {
  return (
    <article className="card">
      <figure>
        <img src={data?.sprites?.front_default} alt={data?.name} />
      </figure>
      <figcaption>
        <h4>{data?.name}</h4>
        <h6>No. {data?.id}</h6>
      </figcaption>
    </article>
  );
}
