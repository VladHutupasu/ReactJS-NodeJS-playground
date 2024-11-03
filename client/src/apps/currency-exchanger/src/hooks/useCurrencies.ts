import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants/endpoints";
import { ICoins } from "../models/ICoins";

export const useCurrencies = () => {
  const [allCurrencies, setAllCurrencies] = useState<ICoins | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const request = await fetch(`${API_BASE_URL}/codes`);
        if (!request.ok) {
          throw new Error(request.statusText);
        }
        const res: ICoins = await request.json();
        setAllCurrencies(res);
        console.log("[dev] Fetched currencies!", res);
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { allCurrencies, isLoading, error };
};
