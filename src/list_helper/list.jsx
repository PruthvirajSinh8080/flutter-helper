// list_helper.jsx
import React, { useState, lazy, Suspense } from "react";

// Dynamically import pages
const pageModules = {
  customContainer: lazy(() => import("../pages/custom_container")),
  customTextField: lazy(() => import("../pages/custom_textfiled")),
};
const ListHelper = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const handlePageClick = (pageName) => {
    setCurrentPage(pageName);
  };
  return (
    <div className="container mx-auto p-4">
      {currentPage ? (
        <Suspense fallback={<div>Loading...</div>}>
          {React.createElement(pageModules[currentPage])}
        </Suspense>
      ) : (
        <div>
          <h2 className="text-lg text-center">Page List</h2>
          <ul className="space-y-2">
            {Object.keys(pageModules).map((pageName) => (
              <li
                key={pageName}
                className="mb-2 border p-2 rounded backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <button onClick={() => handlePageClick(pageName)}>
                  {pageName}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListHelper;
