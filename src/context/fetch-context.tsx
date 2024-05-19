import {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
  JSX,
} from "react";

export const fetchContext = createContext({
  cache: {} as any,
  setCache: (value: any) => {},
});

export default function FetchContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [cache, setCache] = useState({});

  return (
    <fetchContext.Provider value={{ cache, setCache }}>
      {children}
    </fetchContext.Provider>
  );
}

export function useFetch<Data>(endpoint: string, initialData: Data) {
  const [data, setData] = useState<Data>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const cache = useContext(fetchContext);

  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    //abort request if multiple are fired
    controllerRef.current?.abort();

    //check if data has already been fetched
    if (cache.cache[endpoint]) {
      setData(cache.cache[endpoint]);
      return;
    }

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
        //add data to cache
        cache.setCache((prevCache: any) => {
          return { ...prevCache, [endpoint]: responseData };
        });
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
