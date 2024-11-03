import { useCallback, useState } from "react";
import { BASE_API_ENDPOINT } from "../constants/endpoints";
import { IRecipe, IRecipesResponse } from "../models/IRecipe";

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const [recipeTags, setRecipeTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchRecipeById = useCallback(async (recipeId: number) => {
    setIsLoading(true);
    resetStates();
    try {
      const response = await fetch(`${BASE_API_ENDPOINT}/${recipeId}?delay=3000`);
      if (response.ok) {
        const data: IRecipe = await response.json();
        setRecipe(data);
      } else {
        throw new Error("Something went wrong: " + response.status);
      }
    } catch (error: unknown) {
      setErrorMessage(error instanceof Error ? error.message : `Unknown error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchRecipeByTag = useCallback(async (recipeTag: string) => {
    setIsLoading(true);
    resetStates();
    try {
      const response = await fetch(`${BASE_API_ENDPOINT}/tag/${recipeTag}?delay=3000`);
      if (response.ok) {
        const result: IRecipesResponse = await response.json();
        setRecipes(result.recipes);
      } else {
        throw new Error("Something went wrong: " + response.status);
      }
    } catch (error: unknown) {
      setErrorMessage(error instanceof Error ? error.message : `Unknown error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchRecipes = useCallback(async (searchParams: URLSearchParams) => {
    setIsLoading(true);
    resetStates();
    try {
      const response = await fetch(`${BASE_API_ENDPOINT}/search?${searchParams}&delay=2000`);
      if (response.ok) {
        const result: IRecipesResponse = await response.json();
        setRecipes(result.recipes);
      } else {
        throw new Error("Something went wrong - " + response.status);
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : `Unknown error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchRecipeTags = useCallback(() => {
    fetch(`${BASE_API_ENDPOINT}/tags`)
      .then((res) => res.json())
      .then((res: string[]) => setRecipeTags(res.slice(0, 10)))
      .catch((error) => setErrorMessage(error instanceof Error ? error.message : `Unknown error: ${error}`));
  }, []);

  const resetStates = useCallback(() => {
    setRecipes([]);
    setErrorMessage("");
  }, []);

  return {
    recipes,
    recipe,
    recipeTags,
    isLoading,
    errorMessage,
    fetchRecipes,
    fetchRecipeById,
    fetchRecipeTags,
    fetchRecipeByTag,
  };
};
