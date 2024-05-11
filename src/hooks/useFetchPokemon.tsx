import { PokeAPI } from "pokeapi-types";

import { useState, useEffect, useRef } from "react";

export function useFetchPokemon(id: number) {
  const [pokemon, setPokemon] = useState<PokeAPI.Pokemon | null>(null);
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPokemon() {
      setIsLoading(true);
      try {
        setPokemon(null);
        setError(false);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!response.ok) {
          throw new Error("Error getting pokemon");
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    }

    fetchPokemon();
  }, [id]);

  return { pokemon, isLoading, error };
}
