import { PokeAPI } from "pokeapi-types";

type PokemonType = {
  data: PokeAPI.Pokemon;
};

export default function Pokemon({ data }: PokemonType) {
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
