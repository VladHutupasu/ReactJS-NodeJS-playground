export interface IRecipeFilters {
  sortBy: SortBy;
  select: Select[];
  order: Order;
  limit: number;
}

export enum Order {
  Ascending = "asc",
  Descending = "desc",
}

export const ORDER_OPTIONS = [
  { value: Order.Ascending, label: "Ascending" },
  { value: Order.Descending, label: "Descending" },
];

export enum SortBy {
  Name = "name",
  Rating = "rating",
  PrepTimeMinutes = "prepTimeMinutes",
}

export const SORT_BY_OPTIONS = [
  { value: SortBy.Name, label: "Recipe name" },
  { value: SortBy.Rating, label: "Rating" },
  { value: SortBy.PrepTimeMinutes, label: "Preparation time" },
];

export enum Select {
  Name = "name",
  Image = "image",
  Difficulty = "difficulty",
  MealType = "mealType",
  Rating = "rating",
}

export const SELECT_OPTIONS = [
  { value: Select.Name, label: "Recipe name", mandatory: true },
  { value: Select.Image, label: "Recipe image", mandatory: true },
  { value: Select.MealType, label: "Meal type", mandatory: false },
  { value: Select.Rating, label: "Rating", mandatory: false },
];

export const LIMIT_OPTIONS = [5, 10, 15, 20];
