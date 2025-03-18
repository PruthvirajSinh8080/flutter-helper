import React from "react";
import CodeSnippet from "../components/CodeSnippet";
import { useParams } from "react-router-dom";
import WidgetList from "../list_helper/list";

const WidgetPage = () => {
  const { id } = useParams();

  return (
    <div className="p-8 bg-gradient-to-br from-blue-900 to-purple-900 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-8">
        {WidgetList[id].name}
      </h1>
      <div className="overflow-auto max-h-130  ">
        <CodeSnippet code={WidgetList[id].code} language="dart" />
      </div>
    </div>
  );
};

export default WidgetPage;
