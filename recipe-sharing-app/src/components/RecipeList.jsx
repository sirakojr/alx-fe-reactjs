import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const navigate = useNavigate();
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (filteredRecipes.length === 0) {
    return <p>No recipes found</p>;
  }

  return (
    <>
      <br />
      <button onClick={() => navigate("/favorites")}>Favorites</button>
      <button onClick={() => navigate("recommendations")}>
        Recommendations
      </button>
      <div>
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h1>
              <Link to={`/${recipe.id}`}>{recipe.title}</Link>
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
