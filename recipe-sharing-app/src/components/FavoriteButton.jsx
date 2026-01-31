import useRecipeStore from "./recipeStore";

function FavoriteButton({ recipeId }) {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  console.log("Favorites IDs:", favorites);
  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() =>
        isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)
      }
    >
      {isFavorite ? "★ Remove Favorite" : "☆ Add Favorite"}
    </button>
  );
}

export default FavoriteButton;