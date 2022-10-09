import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const meals = useLoaderData().meals;
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2  justify-items-center gap-12 mx-12 my-12">
      {meals.map((meal) => (
        <Meal meal={meal} key={meal.idMeal}></Meal>
      ))}
    </div>
  );
};

export default Meals;
