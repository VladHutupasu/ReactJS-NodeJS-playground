import { useCallback, useEffect, useMemo, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import PriceFilter from "../components/PriceFilter";
import ProductSortBy from "../components/ProductSortBy";
import ProductsList from "../components/ProductsList";
import SearchBar from "../components/SearchBar";
import { useProducts } from "../hooks/useProducts";
import styles from "./homePage.module.scss";

export default function HomePage() {
  const { products, isLoading, errorMessage, fetchProducts } = useProducts();

  const [sortCriteria, setSortCriteria] = useState({ product: "price", order: "asc" });
  const [priceRange, setPriceRange] = useState({ from: 0, to: Infinity });
  const [searchValue, setSearchValue] = useState("");

  console.log("Render HomePage");

  useEffect(() => {
    fetchProducts();
  }, []);

  const applyFiltersAndSorts = useCallback(() => {
    console.log("try to filter");
    if (!products) return;

    let filteredResults = [...products];

    if (searchValue.trim()) {
      filteredResults = filteredResults.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()));
    }

    if (sortCriteria.product === "price") {
      filteredResults.sort((a, b) => (sortCriteria.order === "asc" ? a.price - b.price : b.price - a.price));
    } else {
      filteredResults.sort((a, b) => (sortCriteria.order === "asc" ? a.rating - b.rating : b.rating - a.rating));
    }

    if (priceRange.from !== 0 || priceRange.to !== Infinity) {
      filteredResults = filteredResults.filter(
        (product) => product.price >= priceRange.from && product.price <= priceRange.to
      );
    }

    console.log("Filtered!", filteredResults);
    return filteredResults;
  }, [searchValue, sortCriteria, priceRange, products]);

  const memoizedFilteredProducts = useMemo(applyFiltersAndSorts, [applyFiltersAndSorts]);

  const onPriceFilterChange = useCallback(({ from, to }) => {
    setPriceRange({ from, to });
  }, []);

  const onPriceSortChange = useCallback((value) => {
    setSortCriteria({ product: "price", order: value });
  }, []);

  const onRatingSortChange = useCallback((value) => {
    setSortCriteria({ product: "rating", order: value });
  }, []);

  const onSearchValueChange = useCallback((value) => {
    setSearchValue(value);
  }, []);

  return (
    <div>
      <h1 className="text-center mb-2">Products listings 🛍</h1>

      <section className="flex center mb-2">
        <SearchBar onSearchValueChange={onSearchValueChange} />
      </section>

      <div className={`flex gap-2 ${styles.container}`}>
        <section className={`flex column gap-2 ${styles.filterContainer}`}>
          <PriceFilter onPriceFilterChange={onPriceFilterChange} />
          <ProductSortBy onSortChange={onPriceSortChange} productType="Price" />
          <ProductSortBy onSortChange={onRatingSortChange} productType="Rating" />
        </section>

        <section>
          {isLoading && <Loading />}

          {!isLoading && errorMessage && <ErrorMessage message={errorMessage} />}

          {!isLoading && memoizedFilteredProducts && <ProductsList products={memoizedFilteredProducts} />}
        </section>
      </div>
    </div>
  );
}
