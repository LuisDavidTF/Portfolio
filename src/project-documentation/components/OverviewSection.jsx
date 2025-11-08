import TechStackDisplay from "@/portfolio-showcase/components/TechStackDisplay";
import { getProjectSkills } from "@/portfolio-showcase/data/projects-data";
import Carousel from "../../shared/components/ui/Carousel";

export default function OverviewSection({ description, images, descriptionimage, icon, idproject }) {
    const projectSkills = getProjectSkills(idproject);
    return (
        <div className="hero-about-card " >
            <p className="mb-3 text-center">{description}</p>
            <p className=" skills-documentation text-center icon-docs">
            <div className="div-center"><TechStackDisplay
                skills={projectSkills}
                variant="detailed"
                maxSkills={10}
            /></div></p>
            <Carousel images={images} productName="Project-Image-Docs" description={descriptionimage} icon={icon}/>
        </div>
    );
}