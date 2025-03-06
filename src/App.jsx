import Hero from "./layout/Hero";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TutorialsList from "./pages/TutorialsList";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
            </>
          }
        ></Route>
        <Route path="/tutorial" element={<TutorialsList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
