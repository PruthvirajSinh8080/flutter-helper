import React from "react";

const CodeSnippet = ({ code, language }) => {
  return (
    <div className="relative p-6 backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 max-h-140 overflow-y-auto">
      <div className="absolute top-0 left-0 w-full h-full  rounded-xl -z-10" />
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-sm text-gray-300">{language}</span>
      </div>
      <pre className="overflow-x-auto relative">
        <code className="text-gray-100 font-mono text-sm">{code}</code>

        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="reletive sticky top-1 float-right px-3 py-1.5 bg-white/10 hover:bg-white/20 text-gray-300 text-sm rounded-lg transition-all duration-200"
        >
          Copy
        </button>
      </pre>
    </div>
  );
};

export default CodeSnippet;
