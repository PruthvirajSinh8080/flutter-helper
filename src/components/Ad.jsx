// src/components/Ad.jsx
import React from "react";

const Ad = ({ position }) => {
  return (
    <div
      className={`w-full bg-gray-100 rounded-lg p-4 mb-6 ${
        position === "bottom" ? "mt-8" : ""
      }`}
    >
      <div className="text-center text-gray-500">
        <p className="text-sm">Advertisement</p>
        {/* You can replace this with actual ad code */}
        <div className="h-20 flex items-center justify-center border border-gray-300 rounded my-2">
          Your Ad Content Here
        </div>
      </div>
    </div>
  );
};
