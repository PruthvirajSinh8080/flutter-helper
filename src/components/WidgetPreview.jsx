import React from "react";

const WidgetPreview = ({ imageUrl, altText }) => {
  return (
    <div className="flex justify-center items-center p-4 bg-gray-800 rounded-lg">
      <img
        src={imageUrl}
        alt={altText}
        className="max-w-full h-auto rounded-lg"
      />
    </div>
  );
};

export default WidgetPreview;
