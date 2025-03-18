import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        background: "rgba(150, 100, 196, 0.3)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        position: "relative", // Required for absolute positioning of the button
        overflow: "hidden",
      }}
    >
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "rgba(255, 255, 255, 0.2)",
          color: "white",
          border: "none",
          padding: "6px 12px",
          fontSize: "12px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background 0.3s ease-in-out",
        }}
        onMouseEnter={(e) =>
          (e.target.style.background = "rgba(255, 255, 255, 0.4)")
        }
        onMouseLeave={(e) =>
          (e.target.style.background = "rgba(255, 255, 255, 0.2)")
        }
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Code Block */}
      <SyntaxHighlighter
        language={language}
        style={dracula}
        wrapLongLines={true}
        showLineNumbers={true}
        lineProps={{ style: { padding: "2px 0" } }}
        customStyle={{
          backgroundColor: "transparent",
          padding: "20px",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
