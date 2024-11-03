import { useState } from "react";
import { API_BASE_URL } from "../constants/endpoints";
import { IForm } from "../models/IForm";

export const useExchangeRate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const fetchExchangeRate = async (form: IForm) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/pair/${form.fromCurrency}/${form.toCurrency}?amount=${form.fromAmount}`);
      if (!response.ok) {
        throw new Error(`Something went wrong: ${response.statusText}`);
      }
      const data = await response.json();
      setResult(data.convertedAmount);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : `Unknown error: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { result, fetchExchangeRate, isLoading, error };
};
