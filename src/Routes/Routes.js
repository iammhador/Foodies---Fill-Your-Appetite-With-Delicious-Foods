import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Meals from "../Components/Meals/Meals";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import SignUp from "../Components/SignUp/SignUp";
import NotFound from "../Components/NotFound/NotFound";
import Login from "../Components/Login/Login";
import SingleMeal from "../Components/SingleMeal/SingleMeal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <NotFound></NotFound>,
      },
      { path: "/", element: <Home></Home> },
      {
        path: "/home",
        element: <Home></Home>,
        loader: async () => {
          return fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        },
      },
      {
        path: "/meals",
        element: <Meals></Meals>,
        loader: async () => {
          return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        },
      },
      {
        path: "/meals/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
          );
        },
        element: <SingleMeal />,
      },
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/login", element: <Login></Login> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);
