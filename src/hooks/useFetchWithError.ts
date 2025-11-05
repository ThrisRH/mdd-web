import { useState, useCallback } from "react";
import { handleError } from "@/utils/HandleError";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useFetchWithError<T>(defaultValue: T | null = null) {
  const [state, setState] = useState<FetchState<T>>({
    data: defaultValue,
    loading: false,
    error: null,
  });

  const fetchData = useCallback(async (url: string, options?: RequestInit) => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setState({ data, loading: false, error: null });
      return data;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("An error occurred");
      setState({ data: null, loading: false, error });
      handleError();
      return null;
    }
  }, []);

  return { ...state, fetchData };
}
