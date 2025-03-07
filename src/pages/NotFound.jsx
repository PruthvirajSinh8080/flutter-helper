// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="bg-flutter-blue text-white px-6 py-2 rounded-md hover:bg-flutter-light-blue transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
