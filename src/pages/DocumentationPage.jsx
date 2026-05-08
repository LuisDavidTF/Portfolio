import { useParams } from "react-router-dom";
import { useEffect } from "react";
import VeloniaDocs from "@/project-documentation/data/velonia-docs";
import SmartRecipePlannerDocs from "@/project-documentation/data/smart-recipe-planner-docs";
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
  'cacomi': SmartRecipePlannerDocs
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
    <div className="App py-5 max-w-[90%] mx-auto ">
      <HeroSection title={data.title} tagline={data.tagline} image={data.overview.image} />
      <OverviewSection
        description={data.overview.description}
        descriptionimage={data.overview.images.map(image => image.description)}
        icon={data.overview.images.map(image => image.icon)}
        idproject={projectId}
      />
      <FeaturesSection features={data.features}/>
      <InstallationGuide
        installation={data.installation}
      />
      <DatabaseSchema url={data.database.diagram}/>
      <ArchitectureSection url={data.architecture.diagram}/>
      <CreditsSection credits={data.credits}/>
    </div>
  );
};