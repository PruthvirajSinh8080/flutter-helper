import React from "react";
import AnimatedButton from "../components/AnimatedButton";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      <h1 className="text-6xl font-bold text-white mb-4">
        Flutter Widget Snippets
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Learn Flutter widgets with interactive examples.
      </p>
      <AnimatedButton onClick={() => (window.location.hash = "#/listing")}>
        Get Started
      </AnimatedButton>
    </div>
  );
};

export default LandingPage;
