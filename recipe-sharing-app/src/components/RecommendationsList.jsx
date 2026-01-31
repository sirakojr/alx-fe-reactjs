import { useEffect } from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations,
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return <p>No recommendations available</p>;
  }

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/${recipe.id}`}>
            <h2>{recipe.title}</h2>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
