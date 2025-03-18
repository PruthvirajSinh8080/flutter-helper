import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ListingPage from "./pages/ListingPage";
import WidgetPage from "./pages/WidgetPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/listing" element={<ListingPage />} />
      <Route path="/widget/:id" element={<WidgetPage />} />
    </Routes>
  );
};

export default App;
