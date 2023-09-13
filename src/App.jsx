import "./App.css";
import { Routes, Route } from "react-router-dom";
import Root from "./components/Root";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Page404 from "./components/Page404";
import Skills from "./components/Skills";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/skills" element={<Skills />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
