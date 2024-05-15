import "./App.css";

import { useState, useContext } from "react";

import { PokemonContext } from "./context/pokemon-context";

import ActionButtons from "./components/ActionButtons";
import Pokemon from "./components/Pokemon";

function App() {
  const [id, setId] = useState(1);

  const { pokemon, togglePokemon } = useContext(PokemonContext);

  console.log(pokemon);

  return (
    <>
      <h1>Why react query?</h1>
      <Pokemon id={id} />
      <ActionButtons setId={setId} />
      <button onClick={togglePokemon}>Toggle Pokemon</button>
      {}
    </>
  );
}

export default App;
