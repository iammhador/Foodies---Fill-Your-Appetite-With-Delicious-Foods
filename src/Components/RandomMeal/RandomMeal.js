import React from "react";
import { Link } from "react-router-dom";

const RandomMeal = ({ rMeal }) => {
  const { strMeal, strArea, strInstructions, strMealThumb } = rMeal;
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div>
              <img className="w-11/12" src={strMealThumb} alt="" />
            </div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2 my-auto">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              {strMeal}{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {strArea}
              </span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              {strInstructions.slice(0, 500)}
            </p>

            <div className="mt-8">
              <Link
                to="/meals"
                className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-300 transform border-indigo-600 bg-indigo-600 rounded-md  hover:bg-blue-600  hover:border-indigo-600 "
              >
                More Food
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RandomMeal;
