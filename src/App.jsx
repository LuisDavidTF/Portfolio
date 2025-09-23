// src/App.jsx

import PersonalIntro from "@/personal-branding/components/PersonalIntro";
import "@/shared/styles/globals.css";
import "@/shared/styles/mobile-menu.css";
import "@/shared/styles/animations.css";
import "@/shared/styles/components.css";
import "@/shared/styles/responsive.css";
import "@/shared/styles/tech-colors.css";
import "@/shared/styles/themes.css";
import SocialLinks from "@/professional-network/components/SocialLinks";
import MainNavbar from "@/site-navigation/components/MainNavbar";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DocumentationPage from "./pages/DocumentationPage";
import ScrollToTop from "./shared/components/layout/ScrollToTop";

function App() {
  return (

    <HashRouter>
      <div className="bg-theme-primary">
        {/* Navbar global */}
        <MainNavbar />
        <ScrollToTop />
        {/* Contenido principal según ruta */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs/:projectId" element={<DocumentationPage />} />
        </Routes>

        {/* Footer global */}
        <SocialLinks
          context="footer"
          variant="default"
          showPersonalInfo={true}
          enableAnimations={true}
        />
      </div>
    </HashRouter>
  );
}
export default App;
