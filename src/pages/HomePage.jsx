import PersonalIntro from "@/personal-branding/components/PersonalIntro";
import NavigationButtons from "@/personal-branding/components/NavigationButtons";
import ProjectsContainer from "@/portfolio-showcase/components/ProjectsContainer";
import AboutCard from "@/personal-branding/components/AboutCard";
import SkillsContainer from "@/skills-demonstration/components/SkillsContainer";
export default function HomePage() {
    return (
        <div className="App py-5 max-w-[90%] mx-auto">
            <PersonalIntro
                variant="hero"
                showTitle={true}
                showTagline={true}
                animateText={true}
            />

            <NavigationButtons
                variant="default"
                layout="horizontal"
                showIcons={true}
                showDescriptions={false}
                includeNewFeatures={true}
                enableAnimations={true}
            />


            <AboutCard
                bioLength="medium"
                showAchievements={true}
                showStats={true}
                variant="detailed"
                enableAnimations={true}
            />

            <ProjectsContainer
                showTitle={true}
                showOnlyFeatured={false}
                enableFiltering={false}
                layout="grid"
                maxProjects={null}
            />

            <SkillsContainer
                showTitle={true}
                variant="skill"
                size="medium"
                enableAnimations={true}
            />
        </div>
    );
}