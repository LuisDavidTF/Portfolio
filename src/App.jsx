// src/App.jsx

import PersonalIntro from "@/personal-branding/components/PersonalIntro";
import "@/shared/styles/globals.css";
import "@/shared/styles/animations.css";
import "@/shared/styles/components.css";
import "@/shared/styles/responsive.css";
import "@/shared/styles/tech-colors.css";
import "@/shared/styles/themes.css";
import NavigationButtons from "./personal-branding/components/NavigationButtons";
import ProjectsContainer from "./portfolio-showcase/components/ProjectsContainer";
import AboutCard from "./personal-branding/components/AboutCard";
import SocialLinks from "./professional-network/components/SocialLinks";


function App() {
  return (
    <>
    <PersonalIntro />
    <AboutCard />
    <NavigationButtons />
    <ProjectsContainer/>
    <SocialLinks 
        context="footer"
        variant="default"
        showPersonalInfo={true}
        enableAnimations={true}
      />
    </>
  );
}

export default App;
