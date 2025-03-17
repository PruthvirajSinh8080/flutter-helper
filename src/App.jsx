import Hero from "./layout/Hero";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ListHelper from "./list_helper/list";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/tutorials" element={<ListHelper />} />
      </Routes>
    </Router>
  );
}

export default App;
