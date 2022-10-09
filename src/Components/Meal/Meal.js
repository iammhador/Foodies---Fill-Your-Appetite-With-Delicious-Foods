import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const { idMeal, strMeal, strCategory, strInstructions, strMealThumb } = meal;
  return (
    <div>
      <div className="max-w-md p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <img
          src={strMealThumb}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
            {" "}
            {strCategory}
          </span>
          <h2 className="text-2xl font-semibold tracking-wide">{strMeal}</h2>
        </div>
        <div>
          <p className="dark:text-gray-100">
            {strInstructions.slice(0, 150)}....
          </p>
        </div>
        <div className="mt-4">
          <Link to={`../meals/${idMeal}`}>
            <button
              className="px-5 py-2 font-semibold text-gray-100 transition-colors
          duration-300 transform border-violet-400 bg-violet-600 rounded-md
          hover:bg-violet-800 hover:border-violet-600 "
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Meal;
