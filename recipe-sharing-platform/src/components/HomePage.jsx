import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipe] = useState([]);
  useEffect(() => {
    fetch("../../src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(recipes);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 sm:gap-x-4 m-2">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            className="border-2 bg-slate-200 py-4 hover:shadow-lg  hover:scale-105 hover:transition-transform hover:duration-500 hover:ease-in-out"
            to={`/${recipe.id}`}
          >
            <img
              src={recipe.image}
              alt=""
              className="mx-auto  text-center rounded-lg h-18 w-18 md:w-32 md:h-32"
            />
            <div className="mx-6 md:my-auto">
              <h1 className="font-bold"> {recipe.title} </h1>
              <p> {recipe.summary} </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
