import React from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL", "C#", "Java", "Python"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Angular", "Node.js", "Express", "Bootstrap"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQL Server"]
  },
  {
    title: "Tools & Methodologies",
    skills: ["Git", "MVC", "REST API", "Scrum/Agile", "Stripe API"]
  }
];

function Skills() {
  return (
    <section className="container my-5" id="skills">
      <h2 className="text-center mb-4 section-title">Skills</h2>
      <div className="row g-4 justify-content-center">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="col-6 col-md-3">
            <div className="tech-card">
              <h5>{category.title}</h5>
              <div className="skills-icons">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item" title={skill}>
                    <i className={`fab fa-${skill.toLowerCase()}`}></i> {/* Podremos ajustar iconos */}
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
