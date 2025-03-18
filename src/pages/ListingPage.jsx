import React from "react";
import ListItem from "../components/ListItem";
import WidgetList from "../list_helper/list";
const ListingPage = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-900 to-purple-900 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-8">Flutter Widgets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(WidgetList).map((key) => {
          const widget = WidgetList[key];
          return (
            <ListItem key={widget.id} id={widget.id} title={widget.name} />
          );
        })}
      </div>
    </div>
  );
};

export default ListingPage;
