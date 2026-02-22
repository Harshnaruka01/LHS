import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Templates from "./components/Templates";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <Templates />
      <Projects preview={true} previewList={["clyro", "freakx"]} />
      <Footer />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <Navbar />
      <Projects onlyList={["clyro", "freakx", "tri"]} />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
