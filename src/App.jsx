// src/App.jsx
import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import Skills from "@/components/Skills.jsx";
import Projects from "@/components/Projects.jsx";
import Footer from "@/components/Footer.jsx";
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
