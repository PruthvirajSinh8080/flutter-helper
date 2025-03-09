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
      class="bg-purple-700 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 "
      id={`snippet-${id}`}
    >
      <button
        class="absolute top-2 right-2 glass hover:bg-violet-500 animation-delay-200 text-white px-3 py-1 rounded-md text-sm rounded-2xl"
        onclick="copyCode()"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <div class="mt-2 max-h-auto overflow-y-scroll rounded-lg scrollbar border border-white border-radius-md scrollbar-thumb-blue-500 scrollbar-track-gray-300 px-4">
        <code>{code}</code>
      </div>
    </div>
  );
};

export default CodeSnippet;

{
  // <div
  //   class="bg-purple-700 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 "
  //   id={`snippet-${id}`}
  // >
  //   <button
  //     class="absolute top-2 right-2 glass hover:bg-violet-500 animation-delay-200 text-white px-3 py-1 rounded-md text-sm rounded-2xl"
  //     onclick="copyCode()"
  //   >
  //     {copied ? "Copied!" : "Copy"}
  //   </button>
  //   <div class="mt-2 max-h-auto overflow-y-scroll rounded-lg scrollbar border border-white border-radius-md scrollbar-thumb-blue-500 scrollbar-track-gray-300 px-4">
  //     <SyntaxHighlighter
  //       language={language}
  //       style={atomDark}
  //       showLineNumbers
  //       customStyle={{
  //         margin: 0,
  //         borderRadius: "0 0 0.5rem 0.5rem",
  //         padding: "1rem",
  //       }}
  //     >
  //       {code}
  //     </SyntaxHighlighter>
  //   </div>
  // </div>;
}
