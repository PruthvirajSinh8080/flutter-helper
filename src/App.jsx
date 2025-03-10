import Hero from "./layout/Hero";
// import Navbar from "./layout/Navbar";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import TutorialsList from "./pages/TutorialsList";
import SnippetsPage from "./pages/SnippetsPage";
import PageDetail from "./pages/PageDetails";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import TutorialGrid from "./components/ListTutorialComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Navbar /> */}
              <Hero />
            </>
          }
        ></Route>
        <Route path="/snippets" element={<SnippetsPage />} />
        <Route path="/page/:pageId" element={<PageDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/tutorials" element={<TutorialGrid />} />
      </Routes>
    </Router>
  );
}

export default App;
