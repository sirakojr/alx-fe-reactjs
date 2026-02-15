import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredient] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState(false);
  const [validate, setValidata] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let trimedSteps = steps.trim();
    let word = trimedSteps.split(/\s+/);
    if (
      !title.trim() ||
      !ingredients.trim() ||
      !steps.trim() ||
      word.length == 1
    ) {
      setErrors(true);
      setValidata(false);
      return;
    }
    setTitle("");
    setIngredient("");
    setSteps("");
    setErrors(false);
    setValidata(true);
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded shadow-lg w-full max-w-md sm:max-w-md md:max-w-xl"
        >
          <h2 className="text-2xl mb-4 text-center font-bold">Add Recipe</h2>
          {errors && <span className="text-red-600">Enter full Recipe!</span>}
          {validate && (
            <span className="text-green-600">Recipe is Submited!</span>
          )}
          <div className="mb-4">
            <label className="block">Title:</label>
            <input
              type="text"
              className="border-2 w-full focus:border-green-400 focus:outline-none rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block">Ingredients:</label>
            <textarea
              className="border-2  w-full focus:border-green-400 focus:outline-none rounded-md"
              value={ingredients}
              onChange={(e) => setIngredient(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block">Steps:</label>
            <textarea
              className="border-2  w-full focus:border-green-400 focus:outline-none rounded-md"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" bg-blue-600 hover:bg-blue-500 font-semibold rounded-md  py-2 px-4 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRecipeForm;
