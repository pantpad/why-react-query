import { useState, useEffect, useRef } from "react";

export default function useFetch<Data>(endpoint: string, initialData: Data) {
  const [data, setData] = useState<Data>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

    setData({} as Data);
    setIsLoading(true);

    async function fetchData() {
      setError(null);

      try {
        const response = await fetch(endpoint, {
          signal: controllerRef.current?.signal,
        });
        if (!response.ok) {
          throw new Error("Error while fetching data");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error: any) {
        if (error.name === "AbortError") return;
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
}
