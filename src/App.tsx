import { useEffect, useState } from "react";
import "./App.css";

const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [id, setId] = useState(1);

  function handleNext() {
    setId((prev) => {
      if (prev === 700) return prev;
      return ++prev;
    });
  }
  function handlePrev() {
    setId((prev) => {
      if (prev === 1) return prev;
      return --prev;
    });
  }

  useEffect(() => {
    fetch(`${pokemonAPI}${id}`)
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        setPokemon(resp.sprites["front_default"]);
      });
  }, [id]);

  return (
    <>
      <h1>Why react query?</h1>
      <article>
        <img src={`${pokemon ? pokemon : ""}`} alt={`pokemon n-${id}`} />
        <div className="actions">
          <button onClick={handlePrev}>prev</button>
          <button onClick={handleNext}>next</button>
        </div>
      </article>
    </>
  );
}

export default App;
