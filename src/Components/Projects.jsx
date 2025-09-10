export default function Projects() {
  return (
    <section className="container my-5" id="projects">
      <h2 className="text-center mb-4 section-title">Projects</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?text=Velonia+Preview"
              alt="Velonia Project"
              className="img-fluid rounded"
            />
            <div className="p-3">
              <h3 className="fw-bold">Velonia</h3>
              <p>
                E-commerce platform with full inventory management, secure payments via Stripe,
                and responsive UI built with Angular.
              </p>
              <div className="velonia-skills">
                <div className="skill-item project-skill" title="Angular"><i className="fab fa-angular"></i> <span>Angular</span></div>
                <div className="skill-item project-skill" title="Node.js"><i className="fab fa-node"></i> <span>Node.js</span></div>
                <div className="skill-item project-skill" title="Express"><i className="fas fa-server"></i> <span>Express</span></div>
                <div className="skill-item project-skill" title="MySQL"><i className="fas fa-database"></i> <span>MySQL</span></div>
                <div className="skill-item project-skill" title="Stripe"><i className="fas fa-credit-card"></i> <span>Stripe</span></div>
                <div className="skill-item project-skill" title="JWT"><i className="fas fa-key"></i> <span>JWT</span></div>
                <div className="skill-item project-skill" title="Tailwind"><i className="fab fa-css3-alt"></i> <span>Tailwind</span></div>
                <div className="skill-item project-skill" title="Bootstrap"><i className="fab fa-bootstrap"></i> <span>Bootstrap</span></div>
              </div>
              <a href="https://luisdavidtf.github.io/Velonia-Angular/" target="_blank" className="btn btn-primary me-2">
                Live Demo
              </a>
              <a href="https://github.com/LuisDavidTF/Velonia-Angular" target="_blank" className="btn btn-outline-secondary">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
