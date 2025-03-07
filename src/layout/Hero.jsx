// import React from "react";
// import HeroPageData from "../data_provider/HeroPageData";
// import SocialInfo from "../data_provider/social_info";
// import { Link } from "react-router-dom";
// function Hero() {
//   const data = HeroPageData.getHeroPageData();
//   const socials = SocialInfo.GetSocials();
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//       <div className="text-center">
//         <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-6">
//           {data.title}
//         </h1>
//         <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
//           {data.description}
//         </p>
//         <div className="flex justify-center space-x-4">
//           <Link to={"/tutorial"}>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center">
//               <svg
//                 className="w-5 h-5 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M13 10V3L4 14h7v7l9-11h-7z"
//                 ></path>
//               </svg>
//               Get Started
//             </button>
//           </Link>
//           <button
//             className="border border-slate-700 hover:border-slate-600 text-slate-300 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center"
//             onClick={() => window.open(socials.github, "_blank")}
//           >
//             <svg
//               className="w-5 h-5 mr-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//               ></path>
//             </svg>
//             GitHub
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Hero;

// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContributorCard from "../components/ContributorCard";
import Navbar from "../components/Navbar";

const Hero = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    // In a real app, you might want to fetch this from an API
    // For simplicity, we're importing it directly
    const contributorsData = [
      {
        id: 1,
        name: "Jane Doe",
        role: "Lead Developer",
        avatar: "https://i.pravatar.cc/150?img=1",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
      {
        id: 2,
        name: "John Smith",
        role: "Flutter Expert",
        avatar: "https://i.pravatar.cc/150?img=2",
        github: "https://github.com",
        twitter: null,
      },
      {
        id: 3,
        name: "Alex Johnson",
        role: "UI/UX Designer",
        avatar: "https://i.pravatar.cc/150?img=3",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    ];

    setContributors(contributorsData);
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section className="mb-12">
          <div className="bg-gradient-to-r from-flutter-blue to-flutter-light-blue rounded-lg text-white  mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Flutter Development Helper
            </h1>
            <p className="text-xl mb-6">
              Boost your Flutter app development with code snippets, best
              practices, and more.
            </p>
            <Link
              to="/snippets"
              className="bg-violet-500 text-flutter-blue font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Browse Snippets
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Code Snippets</h3>
              <p className="text-gray-600">
                Copy and paste ready-to-use Flutter code snippets with one
                click.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Documentation</h3>
              <p className="text-gray-600">
                Clear explanations and best practices for Flutter development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Search & Discover</h3>
              <p className="text-gray-600">
                Easily find the code you need with our powerful search function.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">Contributors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contributors.map((contributor) => (
              <ContributorCard
                key={contributor.id}
                name={contributor.name}
                role={contributor.role}
                avatar={contributor.avatar}
                github={contributor.github}
                twitter={contributor.twitter}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
