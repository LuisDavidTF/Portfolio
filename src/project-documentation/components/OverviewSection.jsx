import TechStackDisplay from "@/portfolio-showcase/components/TechStackDisplay";
import { getProjectSkills } from "@/portfolio-showcase/data/projects-data";

export default function OverviewSection({ description, techStack }) {
    const projectSkills = getProjectSkills('velonia');

    return (
        <div className="hero-about-card" >
            <p className="mb-3">{description}</p>
            <p className=" skills-documentation">
            <TechStackDisplay
                skills={projectSkills}
                variant="detailed"
                maxSkills={10}
            /></p>
        </div>
    );
}