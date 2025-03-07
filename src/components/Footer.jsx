// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Flutter DevHelper</h3>
            <p className="text-gray-400">
              Boost your Flutter development with helpful code snippets
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername/flutter-dev-helper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://flutter.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <span>Flutter</span>
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Flutter DevHelper. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
