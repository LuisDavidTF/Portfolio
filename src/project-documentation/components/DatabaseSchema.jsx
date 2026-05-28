import RoadmapSection from "./RoadmapSection";

export default function DatabaseSchema({url}) {
    if (!url) return null;
    return (
        <>
            <h2 className="section-title mt-3">Database Schema</h2>
            <RoadmapSection imageURL={url}/>
        </>
    )
}