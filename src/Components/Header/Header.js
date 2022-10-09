import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Logo/burger.png";
const Header = () => {
  return (
    <div>
      <header className="shadow-sm">
        <div className="mx-auto max-w-screen-xl p-4">
          <div className="flex items-center justify-between gap-4 lg:gap-10">
            <div className="flex lg:w-0 lg:flex-1">
              <Link to="/" className="flex justify-center items-center">
                <img className="h-6" src={Logo} alt="Foodies Logo" />
                <h3 className="text-gray-500 text-xl font-medium ml-2">
                  Foodies
                </h3>
              </Link>
            </div>

            <nav className="hidden gap-8 text-sm font-medium md:flex">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : undefined
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : undefined
                }
                to="/meals"
              >
                Meals
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : undefined
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : undefined
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </nav>

            <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
              <Link
                className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
                to="/login"
              >
                Log in
              </Link>

              <Link
                className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600 hover:text-white "
                to="/signup"
              >
                Sign up
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
