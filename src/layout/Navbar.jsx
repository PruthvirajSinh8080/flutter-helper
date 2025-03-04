import React from "react";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-800 to-slate-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              FlutterDev 🚀
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a
                href="#"
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Tutorials
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Docs
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
