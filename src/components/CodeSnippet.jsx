// src/components/CodeSnippet.jsx
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ code, language, title, id }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id={`snippet-${id}`}
      className="mb-8 bg-white rounded-lg shadow-md relative"
    >
      <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-2 rounded-t-lg">
        <h3 className="font-medium">{title}</h3>
        <button
          onClick={copyToClipboard}
          className="sticky top-4 right-4 bg-flutter-blue hover:bg-flutter-light-blue text-white px-3 py-1 rounded text-sm transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        showLineNumbers
        customStyle={{
          margin: 0,
          borderRadius: "0 0 0.5rem 0.5rem",
          padding: "1rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
