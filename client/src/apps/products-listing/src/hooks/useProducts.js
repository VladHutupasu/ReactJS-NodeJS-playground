import { useCallback, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    resetStates();
    try {
      const response = await fetch("https://dummyjson.com/products?delay=2000");
      const result = await response.json();

      setProducts(result.products);
    } catch (error) {
      setErrorMessage(`Something went wrong ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const resetStates = useCallback(() => {
    setErrorMessage("");
  }, []);

  return { products, isLoading, errorMessage, setProducts, fetchProducts };
};
