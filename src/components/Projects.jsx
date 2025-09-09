import React from "react";

const projects = [
  {
    name: "Velonia",
    description: "E-commerce platform with full inventory management, secure payments via Stripe, and responsive UI built with Angular.",
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?text=Velonia+Preview",
    skills: ["Angular", "Node.js", "Express", "MySQL", "Stripe", "JWT", "Tailwind", "Bootstrap"],
    demo: "https://luisdavidtf.github.io/Velonia-Angular/",
    github: "https://github.com/LuisDavidTF/Velonia-Angular"
  }
];

function Projects() {
  return (
    <section className="container my-5" id="projects">
      <h2 className="text-center mb-4 section-title">Projects</h2>
      <div className="row justify-content-center">
        {projects.map((project, idx) => (
          <div key={idx} className="col-md-6">
            <div className="project-card">
              <img src={project.img} alt={`${project.name} Project`} className="img-fluid rounded"/>
              <div className="p-3">
                <h3 className="fw-bold">{project.name}</h3>
                <p>{project.description}</p>
                <div className="velonia-skills">
                  {project.skills.map((skill, i) => (
                    <div key={i} className="skill-item project-skill" title={skill}>{skill}</div>
                  ))}
                </div>
                <a href={project.demo} target="_blank" className="btn btn-primary me-2">Live Demo</a>
                <a href={project.github} target="_blank" className="btn btn-outline-secondary">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
