import { useParams } from "react-router-dom";
import VeloniaDocs from "@/project-documentation/data/velonia-docs";
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
  velonia: VeloniaDocs
};

export default function DocumentationPage() {
  const { projectId } = useParams();
  const data = docsMap[projectId];
  const projectSkills = getProjectSkills('velonia');
  if (!data) {
    return <div className="text-center mt-5">⚠️ Documentation not found</div>;
  }
  return (
    <div className="App py-5 max-w-[90%] mx-auto ">
      <HeroSection title={data.title} tagline={data.tagline} image={data.overview.image} />
      <OverviewSection
        description={data.overview.description}
        techStack={projectSkills}
        descriptionimage={data.overview.images.map(image => image.description)}
        icon={data.overview.images.map(image => image.icon)}
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