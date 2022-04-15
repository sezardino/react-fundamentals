import { useState } from "react";

export const useFetch = (cb) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      await cb();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { getData, isLoading, error };
};
