import React from "react";

import { useLoaderData } from "react-router-dom";
import RandomMeal from "../RandomMeal/RandomMeal";
import Faq from "../Faq/Faq";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "../Banner/Banner";

const Home = () => {
  const randomMeal = useLoaderData().meals;
  return (
    <div>
      <Banner />
      <section>
        {randomMeal.map((rMeal) => (
          <RandomMeal rMeal={rMeal} key={rMeal.idMeal}></RandomMeal>
        ))}
      </section>
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Home;
