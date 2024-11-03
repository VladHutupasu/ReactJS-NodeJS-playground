import { IRecipe } from "../../models/IRecipe";
import styles from "./recipeDetail.module.scss";

export default function RecipeDetail({ recipe }: { recipe: IRecipe }) {
  return (
    <div className={styles.container}>
      <section>
        <h1>
          {recipe.name} [{recipe.id}]
        </h1>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Instructions</h2>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </section>

      <section>
        <img className={styles.image} src={recipe.image} alt={recipe.name} />
      </section>
    </div>
  );
}
