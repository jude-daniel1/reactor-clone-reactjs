import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigation = useNavigate();
  console.log(location.pathname);
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-10">
      <header className="flex justify-between items-center  px-3 max-w-6xl mx-auto">
        <div className="">
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="main logo"
            className="h-5 object-contain"
            onClick={() => navigation("/")}
          />
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex items-center space-x-10">
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer hover:border-b-red-500 ${
                pathMathRoute("/") && "text-black  border-b-red-500"
              }`}
              onClick={() => navigation("/")}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer hover:border-b-red-500 ${
                pathMathRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigation("/offers")}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer hover:border-b-red-500 ${
                pathMathRoute("/sign-in") && "text-black border-b-red-500"
              }`}
              onClick={() => navigation("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
