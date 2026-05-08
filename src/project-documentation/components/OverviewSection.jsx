import TechStackDisplay from "@/portfolio-showcase/components/TechStackDisplay";
import { getProjectSkills } from "@/portfolio-showcase/data/projects-data";
import Carousel from "../../shared/components/ui/Carousel";

export default function OverviewSection({ description, images, descriptionimage, icon, idproject }) {
    const projectSkills = getProjectSkills(idproject);
    return (
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-fade-in pb-16 px-4">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-center mb-10 max-w-3xl">
                {description}
            </p>
            <div className="w-full flex justify-center mb-12">
                <TechStackDisplay
                    skills={projectSkills}
                    variant="compact"
                    maxSkills={10}
                    className="justify-center"
                />
            </div>
            {images && images.length > 0 && (
                <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                    <Carousel images={images} productName="Project-Image-Docs" description={descriptionimage} icon={icon}/>
                </div>
            )}
        </div>
    );
}