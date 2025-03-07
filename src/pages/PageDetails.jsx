// src/pages/PageDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CodeSnippet from "../components/CodeSnippet";
import { pages } from "../data/pages";
import Navbar from "../components/Navbar";

const PageDetail = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPage = pages.find((p) => p.id === pageId);

    if (foundPage) {
      setPage(foundPage);
    } else {
      navigate("/not-found");
    }

    setLoading(false);
  }, [pageId, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">Loading...</div>
    );
  }

  if (!page) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl text-white font-bold mb-2">{page.title}</h1>
        <div className="flex flex-wrap mb-6">
          {page.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-white">{page.description}</p>
        </div>

        {page.content.map((section, index) => (
          <div key={index} className="mb-8">
            {section.type === "text" && (
              <div
                className="prose max-w-none text-white mb-4"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            )}

            {section.type === "code" && (
              <CodeSnippet
                id={`${page.id}-${index}`}
                code={section.content}
                language={section.language || "dart"}
                title={section.title || "Code Snippet"}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default PageDetail;
