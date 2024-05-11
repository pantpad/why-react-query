import "./App.css";

import { useState } from "react";

import ActionButtons from "./components/ActionButtons";
import Pokemon from "./components/Pokemon";

function App() {
  const [id, setId] = useState(1);

  return (
    <>
      <h1>Why react query?</h1>
      <Pokemon id={id} />
      <ActionButtons setId={setId} />
    </>
  );
}

export default App;
