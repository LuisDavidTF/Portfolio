import RoadmapSection from "./RoadmapSection";

export default function ArchitectureSection({url}) {
    if (!url) return null;
    return (
        <>
            <h2 className="section-title mt-3">Architecture</h2>
                <RoadmapSection imageURL={url}/>
            
        </>
    )
}