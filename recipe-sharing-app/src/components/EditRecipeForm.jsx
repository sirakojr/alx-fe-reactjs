import { useState } from "react";
import useRecipeStore from "./recipeStore";

function EditRecipeForm({ recipe }) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // local form state
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({ title, description });
    updateRecipe(recipe.id, {
      title,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>

      <div>
        <label>Title</label>
        <br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label>Description</label> <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditRecipeForm;
