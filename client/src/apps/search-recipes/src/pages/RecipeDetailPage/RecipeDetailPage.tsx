import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import RecipeDetail from "../../components/RecipeDetail/RecipeDetail";
import { useRecipes } from "../../hooks/useRecipes";

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { recipe, isLoading, errorMessage, fetchRecipeById } = useRecipes();
  const navigate = useNavigate();

  useEffect(() => {
    const parsedID = parseInt(id || "", 10);
    if (isNaN(parsedID)) {
      navigate("/home");
      return;
    }
    fetchRecipeById(parsedID);
  }, [id, fetchRecipeById, navigate]);

  return (
    <div>
      <h3>
        <Link to="/home">Home</Link>
      </h3>

      {isLoading && <Loading />}

      {!isLoading && errorMessage && <p className="error-message">{errorMessage}</p>}

      {!isLoading && recipe && <RecipeDetail recipe={recipe} />}
    </div>
  );
}
