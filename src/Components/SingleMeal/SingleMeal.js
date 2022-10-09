import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleMeal = () => {
  const data = useLoaderData().meals[0];
  const { strMeal, strInstructions, strMealThumb } = data;
  console.log(data);
  return (
    <div className="w-3/4 mx-auto ">
      <img
        alt="Lava"
        src={strMealThumb}
        className="h-96 w-full rounded-xl  shadow-xl"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold text-gray-900">{strMeal}</h5>
        <p className="mt-2 text-gray-500">{strInstructions}</p>
      </div>
    </div>
  );
};

export default SingleMeal;
