import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [singleRecipe, setSingleRecipe] = useState([]);
  // the instructions is to use useEFfect and covert it to js object
  useEffect(() => {
    fetch("../../src/data.json")
      .then((res) => res.json())
      .then((data) => {
        let oneData = data.filter((f) => f.id == id);
        setSingleRecipe(oneData[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-screen">
      <div className="my-auto m-6 sm:mx-10 md:mx-16 lg:mx-20">
        <img
          src={singleRecipe.image}
          alt={singleRecipe.title}
          className="mx-auto rounded-lg my-6 md:scale-110 md:my-8 lg:my-10 hover:scale-110 hover:md:scale-125 transition-transform duration-500 shadow-md"
        />
        <div className="gap-y-5 bg-slate-200 p-4">
          <p>
            <span className="font-bold text-lg">Name: </span> {singleRecipe.title}
          </p>
          <p>
            <span className="font-bold">Summary: </span> {singleRecipe.summary}
          </p>
          <p>
            <span className="font-bold">Ingredients: </span>
            {singleRecipe.ingredients}
          </p>
          <p>
            <span className="font-bold">Descrition: </span>
            {singleRecipe.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
