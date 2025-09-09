// src/App.jsx
import Navbar from "@/Components/Navbar.jsx";
import Hero from "@/Components/Hero.jsx";
import Skills from "@/Components/Skills.jsx";
import Projects from "@/Components/Projects.jsx";
import Footer from "@/Components/Footer.jsx";
import "@/App.css";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
