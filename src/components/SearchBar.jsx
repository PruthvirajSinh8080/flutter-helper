// src/components/SearchBar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { snippets } from "../data/snippets";
import { pages } from "../data/pages";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 2) {
      setIsSearching(true);

      // Search in pages
      const pageResults = pages.filter(
        (page) =>
          page.title.toLowerCase().includes(value.toLowerCase()) ||
          page.description.toLowerCase().includes(value.toLowerCase())
      );

      // Search in snippets
      const snippetResults = snippets.filter(
        (snippet) =>
          snippet.title.toLowerCase().includes(value.toLowerCase()) ||
          snippet.description.toLowerCase().includes(value.toLowerCase())
      );

      setSearchResults([
        ...pageResults.map((page) => ({ ...page, type: "page" })),
        ...snippetResults.map((snippet) => ({ ...snippet, type: "snippet" })),
      ]);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  const handleResultClick = (result) => {
    if (result.type === "page") {
      navigate(`/page/${result.id}`);
    } else {
      navigate(`/snippets?highlight=${result.id}`);
    }
    setSearchTerm("");
    setIsSearching(false);
    setSearchResults([]);
  };

  return (
    <div className="relative w-full md:w-64 lg:w-80">
      <input
        type="text"
        placeholder="Search snippets and pages..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full bg-white text-gray-800 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-flutter-light-blue"
      />

      {isSearching && searchResults.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {searchResults.map((result) => (
            <div
              key={result.id}
              onClick={() => handleResultClick(result)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <div className="font-medium">{result.title}</div>
              <div className="text-sm text-gray-500">
                {result.type === "page" ? "Page" : "Snippet"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
