import { useContext } from "react";
import { PokemonContext } from "../context/pokemon-context";

export default function ActionButtons() {
  const { handleNext, handlePrev } = useContext(PokemonContext);

  return (
    <div className="actions">
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
    </div>
  );
}
