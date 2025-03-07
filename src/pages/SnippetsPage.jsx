// src/pages/SnippetsPage.jsx
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { snippets } from "../data/snippets";
import { pages } from "../data/pages";
import Navbar from "../components/Navbar";

const SnippetsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const highlightId = searchParams.get("highlight");

  useEffect(() => {
    if (highlightId) {
      const element = document.getElementById(`snippet-${highlightId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        element.classList.add("ring-2", "ring-flutter-yellow");
        setTimeout(() => {
          element.classList.remove("ring-2", "ring-flutter-yellow");
        }, 2000);
      }
    }
  }, [highlightId]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-white mb-6">
          Flutter Development Pages
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Link key={page.id} to={`/page/${page.id}`}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition">
                <h2 className="text-xl font-bold mb-2 text-flutter-blue">
                  {page.title}
                </h2>
                <p className="text-gray-600 mb-4">{page.description}</p>
                <div className="flex flex-wrap">
                  {page.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SnippetsPage;
