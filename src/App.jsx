import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ViewPost from "./pages/ViewPost.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewpost" element={<ViewPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
