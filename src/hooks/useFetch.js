import { useState } from "react";

export const useFetch = (cb) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (...args) => {
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
