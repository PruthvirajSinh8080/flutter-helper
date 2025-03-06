import React from "react";
import PropTypes from "prop-types";

const TutorialGrid = ({ tutorials, title = "Tutorials" }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {tutorial.title}
              </h2>
              <p className="text-gray-600 mb-4">{tutorial.description}</p>
              <a
                href={tutorial.link}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {tutorial.linkText || "Learn More →"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TutorialGrid.propTypes = {
  tutorials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      linkText: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default TutorialGrid;
