import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ id, title }) => {
  return (
    <Link
      to={`/widget/${id}`}
      className="block hover:scale-105 transition-transform duration-300"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </Link>
  );
};

export default ListItem;
