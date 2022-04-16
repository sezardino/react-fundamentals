import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFetch = (cb: (...args: unknown[]) => Promise<void>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);

  const getData = async (...args: any[]) => {
    try {
      setIsLoading(true);
      await cb(...args);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { getData, isLoading, error };
};
