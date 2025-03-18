import React from "react";

const GlassCard = ({ children, className }) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
