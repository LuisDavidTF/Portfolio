// src/components/Skills.jsx
export default function Skills() {
  return (
    <section className="container my-5" id="skills">
      <h2 className="text-center mb-4 section-title">Skills</h2>
      <div className="row g-4 justify-content-center">
        {/* Languages */}
        <div className="col-6 col-md-3">
          <div className="tech-card">
            <h5>Languages</h5>
            <div className="skills-icons">
              <div className="skill-item" title="JavaScript"><i className="fab fa-js"></i> <span>JavaScript</span></div>
              <div className="skill-item" title="TypeScript"><i className="fas fa-code"></i> <span>TypeScript</span></div>
              <div className="skill-item" title="HTML5"><i className="fab fa-html5"></i> <span>HTML5</span></div>
              <div className="skill-item" title="CSS3"><i className="fab fa-css3-alt"></i> <span>CSS3</span></div>
              <div className="skill-item" title="SQL"><i className="fas fa-database"></i> <span>SQL</span></div>
              <div className="skill-item" title="C#"><i className="fas fa-code"></i> <span>C#</span></div>
              <div className="skill-item" title="Java"><i className="fab fa-java"></i> <span>Java</span></div>
              <div className="skill-item" title="Python"><i className="fab fa-python"></i> <span>Python</span></div>
            </div>
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="col-6 col-md-3">
          <div className="tech-card">
            <h5>Frameworks & Libraries</h5>
            <div className="skills-icons">
              <div className="skill-item" title="Angular"><i className="fab fa-angular"></i> <span>Angular</span></div>
              <div className="skill-item" title="Node.js"><i className="fab fa-node"></i> <span>Node.js</span></div>
              <div className="skill-item" title="Express"><i className="fas fa-server"></i> <span>Express</span></div>
              <div className="skill-item" title="Bootstrap"><i className="fab fa-bootstrap"></i> <span>Bootstrap</span></div>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="col-6 col-md-3">
          <div className="tech-card">
            <h5>Databases</h5>
            <div className="skills-icons">
              <div className="skill-item" title="MySQL"><i className="fas fa-database"></i> <span>MySQL</span></div>
              <div className="skill-item" title="SQL Server"><i className="fas fa-database"></i> <span>SQL Server</span></div>
            </div>
          </div>
        </div>

        {/* Tools & Methodologies */}
        <div className="col-6 col-md-3">
          <div className="tech-card">
            <h5>Tools & Methodologies</h5>
            <div className="skills-icons">
              <div className="skill-item" title="Git"><i className="fab fa-git-alt"></i> <span>Git</span></div>
              <div className="skill-item" title="MVC"><i className="fas fa-file-code"></i> <span>MVC</span></div>
              <div className="skill-item" title="REST API"><i className="fas fa-network-wired"></i> <span>REST API</span></div>
              <div className="skill-item" title="Scrum/Agile"><i className="fas fa-project-diagram"></i> <span>Scrum/Agile</span></div>
              <div className="skill-item" title="Stripe API"><i className="fas fa-credit-card"></i> <span>Stripe API</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
