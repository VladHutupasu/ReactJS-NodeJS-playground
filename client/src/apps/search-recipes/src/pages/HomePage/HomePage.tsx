import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import RecipeFilters from "../../components/RecipeFilters/RecipeFilters";
import RecipeTags from "../../components/RecipeTags/RecipeTags";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";
import { useRecipes } from "../../hooks/useRecipes";
import { IRecipeFilters } from "../../models/IRecipeFilters";

export default function HomePage() {
  console.log("Re-render HomePage");
  const { recipes, recipeTags, isLoading, errorMessage, fetchRecipes, fetchRecipeTags, fetchRecipeByTag } = useRecipes();
  const [searchParams, setSearchParams] = useSearchParams();
  const SEARCH_KEYWORD = "q";

  useEffect(() => {
    fetchRecipeTags();
  }, []);

  useEffect(() => {
    console.log("Triggering with", searchParams.size);
    searchParams.get(SEARCH_KEYWORD) && fetchRecipes(searchParams);
  }, [searchParams]);

  const handleSearch = useCallback(
    (searchValue: string) => {
      let newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(SEARCH_KEYWORD, searchValue);
      setSearchParams(newSearchParams);
    },
    [setSearchParams]
  );

  const handleTagClick = (tag: string) => {
    fetchRecipeByTag(tag);
  };

  const handleFilterChange = (filters: IRecipeFilters) => {
    let queryParams = new URLSearchParams(searchParams);
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        queryParams.set(key, value.join(","));
      } else {
        queryParams.set(key, value);
      }
    });
    setSearchParams(queryParams);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Recipe Finder 🍕</h1>

      <SearchBar onSearch={handleSearch} initialQuery={searchParams.get(SEARCH_KEYWORD) || ""} />
      <RecipeTags tags={recipeTags} handleTagClick={handleTagClick} isLoading={isLoading} />
      <RecipeFilters onFilterChange={handleFilterChange} />

      {isLoading && <Loading />}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {recipes && !isLoading && <SearchResults recipes={recipes} />}
    </>
  );
}
