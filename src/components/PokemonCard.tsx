import { useState } from "react";
import ActionButtons from "./ActionButtons";
import PokemonState from "./PokemonState";

export default function PokemonCard() {
  const [id, setId] = useState(1);

  return (
    <section className="pokemon-card-container">
      <PokemonState id={id} />
      <ActionButtons setId={setId} />
    </section>
  );
}
