import React from "react";
import HeroPageData from "../data_provider/HeroPageData";
import AdComponent from "../components/Ad";
function Hero() {
  const data = HeroPageData.getHeroPageData();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-6">
          {data.title}
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
          {data.description}
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            Get Started
          </button>
          <button className="border border-slate-700 hover:border-slate-600 text-slate-300 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            GitHub
          </button>
        </div>
      </div>
      <AdComponent title={"Ad Title"} />
    </div>
  );
}
export default Hero;
