import { useEffect, useState } from "react";
import {
  IRecipeFilters,
  LIMIT_OPTIONS,
  Order,
  ORDER_OPTIONS,
  Select,
  SELECT_OPTIONS,
  SORT_BY_OPTIONS,
  SortBy,
} from "../../models/IRecipeFilters";
import styles from "./recipeFilters.module.scss";

export default function RecipeFilters({ onFilterChange }: { onFilterChange: (filters: IRecipeFilters) => void }) {
  const [filters, setFilters] = useState<IRecipeFilters>({
    sortBy: SortBy.Name,
    select: [Select.Name, Select.Image],
    order: Order.Ascending,
    limit: 10,
  });

  // Trigger once initially so we set the default filters
  useEffect(() => onFilterChange(filters), []);

  const handleChange = (filterName: keyof IRecipeFilters, filterValue: IRecipeFilters[keyof IRecipeFilters]) => {
    const newFilters = {
      ...filters,
      [filterName]: filterValue,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className={styles.container}>
      <fieldset>
        <legend>Order recipes</legend>
        <select
          id="orderBy"
          name="orderBy"
          className={styles.input}
          value={filters.order}
          onChange={(e) => handleChange("order", e.target.value as Order)}
        >
          {ORDER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <legend>Recipes per page</legend>
        <select
          id="limitTo"
          name="limitTo"
          value={filters.limit}
          onChange={(e) => handleChange("limit", Number(e.target.value))}
        >
          {LIMIT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <legend>Select properties</legend>

        {SELECT_OPTIONS.map((option) => (
          <div key={option.value}>
            <input
              id={option.label}
              name={option.value}
              type="checkbox"
              checked={filters.select.includes(option.value)}
              value={option.value}
              disabled={option.mandatory}
              onChange={(e) => {
                let newArray: Select[] = [];
                if (e.target.checked) {
                  newArray = [...filters.select, option.value];
                } else {
                  newArray = filters.select.filter((x) => x !== option.value);
                }
                handleChange("select", newArray);
              }}
            />
            <label htmlFor={option.label}>{option.label}</label>
          </div>
        ))}
      </fieldset>

      <fieldset>
        <legend>Sort recipes by:</legend>

        {SORT_BY_OPTIONS.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              id={option.value}
              name="sortBy"
              value={option.value}
              onChange={() => handleChange("sortBy", option.value)}
              checked={filters.sortBy === option.value}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
