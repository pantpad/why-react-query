import { PokeAPI } from "pokeapi-types";

import { useState, useEffect, useRef } from "react";

export function useFetchPokemon(id: number) {
  const [pokemon, setPokemon] = useState<PokeAPI.Pokemon | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const controller = useRef<AbortController | null>(null);

  useEffect(() => {
    async function fetchPokemon() {
      controller.current?.abort();
      controller.current = new AbortController();

      setIsLoading(true);
      setPokemon(null);

      try {
        setError(null);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}`,
          { signal: controller.current?.signal }
        );

        if (!response.ok) {
          throw new Error("Error getting pokemon");
        }

        const data = await response.json();
        setPokemon(data);
      } catch (error: any) {
        if (error.name === "AbortError") {
          return;
        }
        setError(error);
      }

      setIsLoading(false);
    }

    fetchPokemon();
  }, [id]);

  return { pokemon, isLoading, error };
}
