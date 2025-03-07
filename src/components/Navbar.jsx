// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-flutter-blue text-white shadow-md border-b border-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <span className="text-flutter-yellow">Flutter</span>
              <span className="ml-2">DevHelper</span>
            </Link>
          </div>

          <div className="w-full md:w-auto mb-4 md:mb-0">
            <SearchBar />
          </div>

          <div className="flex space-x-6">
            <Link
              to="/"
              className={`hover:text-flutter-yellow transition ${
                location.pathname === "/" ? "text-flutter-yellow" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/snippets"
              className={`hover:text-flutter-yellow transition ${
                location.pathname === "/snippets" ? "text-flutter-yellow" : ""
              }`}
            >
              Snippets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
