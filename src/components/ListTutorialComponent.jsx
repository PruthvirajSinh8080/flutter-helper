import React from "react";
import PropTypes from "prop-types";

const TutorialGrid = ({ tutorials, title = "Tutorials" }) => {
  return (
    <>
      <header class="py-12 text-center">
        <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-300 to-blue-500 bg-clip-text text-transparent">
          Flutter Tutorials
        </h1>
        <p class="mt-4 text-xl">
          Explore in-depth, topic-wise guides to master Flutter
        </p>
      </header>

      <main class="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <a href="#" class="glass rounded-3xl p-8 shadow-2xl card-hover">
          <h2 class="text-3xl font-bold mb-4">State Management</h2>
          <p class="text-lg">
            Learn the best practices for managing state in your Flutter apps
            with hands-on examples.
          </p>
        </a>
        <a href="#" class="glass rounded-3xl p-8 shadow-2xl card-hover">
          <h2 class="text-3xl font-bold mb-4">Networking</h2>
          <p class="text-lg">
            Master API integration, HTTP requests, and real-time data handling
            in Flutter.
          </p>
        </a>
        <a href="#" class="glass rounded-3xl p-8 shadow-2xl card-hover">
          <h2 class="text-3xl font-bold mb-4">Animations</h2>
          <p class="text-lg">
            Create stunning animations and transitions that enhance user
            engagement.
          </p>
        </a>
        <a href="#" class="glass rounded-3xl p-8 shadow-2xl card-hover">
          <h2 class="text-3xl font-bold mb-4">Responsive Design</h2>
          <p class="text-lg">
            Build flexible UIs that look great on every device using Flutter's
            layout system.
          </p>
        </a>
        <a href="#" class="glass rounded-3xl p-8 shadow-2xl card-hover">
          <h2 class="text-3xl font-bold mb-4">Performance</h2>
          <p class="text-lg">
            Optimize your app for speed and efficiency with expert tips and
            techniques.
          </p>
        </a>
        <a href="#" class="glass rounded-3xl p-8 shadow-2xl card-hover">
          <h2 class="text-3xl font-bold mb-4">Testing & Debugging</h2>
          <p class="text-lg">
            Learn how to write effective tests and debug your Flutter
            applications.
          </p>
        </a>
      </main>
    </>
    // <div className="container mx-auto px-4 py-8">
    //   <h1 className="text-3xl font-bold text-white mb-8">{title}</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {tutorials.map((tutorial, index) => (
    //       <div
    //         key={index}
    //         className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    //       >
    //         <div className="p-6">
    //           <h2 className="text-xl font-semibold text-gray-700 mb-2">
    //             {tutorial.title}
    //           </h2>
    //           <p className="text-gray-600 mb-4">{tutorial.description}</p>
    //           <a
    //             href={tutorial.link}
    //             className="text-blue-600 hover:text-blue-800 font-medium"
    //           >
    //             {tutorial.linkText || "Learn More →"}
    //           </a>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
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
