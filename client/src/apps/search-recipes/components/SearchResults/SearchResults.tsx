import { useCallback } from "react";
import { Link } from "react-router-dom";
import { IRecipe } from "../../models/IRecipe";
import styles from "./searchResults.module.css";

export default function SearchResults({ recipes }: { recipes: IRecipe[] }) {
  console.log("Re-render SearchResults");

  const log = useCallback((recipeId: number) => {
    console.log("Recipe with ID: ", recipeId);
  }, []);

  return (
    <div className={styles.container}>
      {recipes.map(({ id, name, mealType, image, rating }) => (
        <Link key={id} to={`/recipe/${id}`}>
          <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.overlay} />
            <div className={styles.cardContent}>
              <h2 onClick={() => log(id)}>{name}</h2>
              {mealType?.map((type, index) => (
                <span key={index}>
                  {type}
                  {index < mealType.length - 1 ? " | " : ""}
                </span>
              ))}

              {rating && <p>Rating {rating}</p>}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
