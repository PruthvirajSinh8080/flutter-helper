import React from "react";

const AnimatedButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105"
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
