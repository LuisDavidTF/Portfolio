import { useParams } from "react-router-dom";
import { useEffect } from "react";
import VeloniaDocs from "@/project-documentation/data/velonia-docs";
import SmartRecipePlannerDocs from "@/project-documentation/data/smart-recipe-planner-docs";
import MarkdifyDocs from "@/project-documentation/data/markdify-docs";
import OrthosDocs from "@/project-documentation/data/orthos-docs";
import HeroSection from "@/project-documentation/components/HeroSection";
import OverviewSection from "../project-documentation/components/OverviewSection";
import { getProjectSkills } from "@/portfolio-showcase/data/projects-data";
import "@/project-documentation/styles/docs-styles.css";
import InstallationGuide from "../project-documentation/components/InstallationGuide";
import RoadmapSection from "../project-documentation/components/RoadmapSection";
import ArchitectureSection from "../project-documentation/components/ArchitectureSection";
import DatabaseSchema from "../project-documentation/components/DatabaseSchema";
import FeaturesSection from "../project-documentation/components/FeaturesSection";
import CreditsSection from "../project-documentation/components/CreditsSection";
const docsMap = {
  velonia: VeloniaDocs,
  'cacomi': SmartRecipePlannerDocs,
  markdify: MarkdifyDocs,
  orthos: OrthosDocs
};

export default function DocumentationPage() {
  const { projectId } = useParams();
  const data = docsMap[projectId];

  useEffect(() => {
    if (data) {
      document.title = `${data.title} | Luis David Trejo Fuentes`;
    }
    return () => {
      document.title = "Luis David Trejo Fuentes | Portfolio";
    };
  }, [data]);

  if (!data) {
    return <div className="text-center mt-5">⚠️ Documentation not found</div>;
  }
  return (
    <div className="w-full bg-theme-primary pb-20">
      <HeroSection title={data.title} tagline={data.tagline} image={data.overview.image} />
      <OverviewSection
        description={data.overview.description}
        images={data.overview.images ? data.overview.images.map(image => image.link) : []}
        descriptionimage={data.overview.images ? data.overview.images.map(image => image.description) : []}
        icon={data.overview.images ? data.overview.images.map(image => image.icon) : []}
        idproject={projectId}
      />
      <FeaturesSection features={data.features}/>
      <div className="max-w-4xl mx-auto px-4 mt-20 space-y-20">
        <InstallationGuide installation={data.installation} />
        <DatabaseSchema url={data.database.diagram} />
        <ArchitectureSection url={data.architecture.diagram} />
        <CreditsSection credits={data.credits} />
      </div>
      
      {/* Floating Action Button to visit live site */}
      {data.deployedURL && (
        <a
          href={data.deployedURL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600/95 text-white font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md border border-indigo-400/30 hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
          title={`Visit ${data.title} Live App`}
        >
          <span className="text-sm font-medium tracking-wide">Visit Live App</span>
          <i className="fas fa-external-link-alt text-xs opacity-85 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"></i>
        </a>
      )}
    </div>
  );
};