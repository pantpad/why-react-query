export default function PokemonError() {
  return (
    <article className="card">
      <figure className="card-error">
        <img width="100px" height="100px" />
      </figure>
      <figcaption>
        <h4>Error while getting Pokemon</h4>
        <h6>Refresh your browser or try again</h6>
      </figcaption>
    </article>
  );
}
