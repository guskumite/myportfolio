import "./App.css";
import { Routes, Route } from "react-router-dom";
import Root from "./components/Root";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/contact" element={<ContactMe />} />
    </Routes>
  );
}

export default App;
