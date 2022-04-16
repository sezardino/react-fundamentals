import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFetch = (cb) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
