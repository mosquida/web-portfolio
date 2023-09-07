import Home from "./Home";
import Projects from "./Projects";
import ProjectDetails from "./ProjectDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
