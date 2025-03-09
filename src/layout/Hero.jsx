import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContributorCard from "../components/ContributorCard";

const Hero = () => {
  const [contributors, setContributors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchContributors = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/PruthvirajSinh8080/flutter-helper/contributors"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setContributors(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContributors();
  }, []);

  return (
    <>
      <section class="relative flex items-center justify-center h-screen overflow-hidden">
        <video
          autoplay
          muted
          loop
          class="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source
            src="https://www.videvo.net/videvo_files/converted/2015_07/preview/Clouds_Time_Lapse_HD.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div class="relative text-center px-4">
          <h1 class="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
            Flutter Helper
          </h1>
          <p class="mt-4 text-2xl md:text-3xl animate-fadeInUp">
            Empowering Flutter Developers Worldwide
          </p>
          <Link to={"/tutorials"}>
            <button className="animate-fadeInUp border border-white text-white mt-5 px-4 py-2 rounded-md hover:bg-gradient-to-l hover:from-pink-600 hover:to-purple-500  transition duration-1000 ease-in-out">
              Let's Get Started
            </button>
          </Link>
        </div>
      </section>
      <main class="container mx-auto px-4 py-12 space-y-12">
        <div class="border border-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition duration-300">
          <h2 class="text-4xl font-bold mb-6">About Flutter Helper</h2>
          <p class="text-xl leading-relaxed">
            Flutter Helper delivers cutting-edge tutorials and expert advice for
            building beautiful, high-performance Flutter apps. Explore our
            resources and join a vibrant community of developers.
          </p>
        </div>

        <div class="rounded-3xl transform hover:scale-105 transition duration-300 p-8">
          <div className="flex justify-center">
            <h2 class="text-4xl font-bold mb-6">Our Contributors</h2>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full  h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center">Error: {error}</div>
          ) : (
            <ul class="space-y-4 text-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contributors.map((contributor) => (
                <li key={contributor.id}>
                  <ContributorCard
                    name={contributor.login}
                    role={contributor.contributions}
                    avatar={contributor.avatar_url}
                    github={contributor.html_url}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
};

export default Hero;
