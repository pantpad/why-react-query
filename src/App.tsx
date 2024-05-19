import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <>
      <h1>Why react query?</h1>
      <main className="pokemon-container">
        <PokemonCard />
        <PokemonCard />
      </main>
    </>
  );
}

export default App;
