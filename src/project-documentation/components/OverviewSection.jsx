import TechStackDisplay from "@/portfolio-showcase/components/TechStackDisplay";
import { getProjectSkills } from "@/portfolio-showcase/data/projects-data";
import Carousel from "../../shared/components/ui/Carousel";

export default function OverviewSection({ description, images, descriptionimage, icon, idproject }) {
    const projectSkills = getProjectSkills(idproject);
    return (
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-fade-in pb-16 px-4">
            <p className="text-lg md:text-xl text-secondary leading-relaxed text-center mb-10 max-w-3xl">
                {description}
            </p>
            <div className="w-full flex flex-col items-center mb-16">
                <TechStackDisplay
                    skills={projectSkills}
                    variant="project"
                    maxSkills={12}
                    className="justify-center"
                />
                <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4A373]/30 to-transparent mt-12 rounded-full"></div>
            </div>
            {images && images.length > 0 && (
                <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-theme-light">
                    <Carousel images={images} productName="Project-Image-Docs" description={descriptionimage} icon={icon}/>
                </div>
            )}
        </div>
    );
}