import "./App.css";
import { Routes, Route } from "react-router-dom";
import Root from "./components/Root";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
