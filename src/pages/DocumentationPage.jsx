import { useParams } from "react-router-dom";
import VeloniaDocs from "@/project-documentation/data/velonia-docs";
import HeroSection from "@/project-documentation/components/HeroSection";
import OverviewSection from "../project-documentation/components/OverviewSection";
import { getProjectSkills } from "@/portfolio-showcase/data/projects-data";
import "@/project-documentation/styles/docs-styles.css";
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
      <OverviewSection description={data.overview.description} techStack={projectSkills} images={data.overview.images} />
    </div>
  );
};