export default function CreditsSection({ credits }) {
    return (
        <section className="mt-3">
            <h2 className="section-title">Credits</h2>
            <div className="hero-about-card">
                {/* Verificar si el autor existe */}
                {credits.author && (
                    <p className="credit-item">
                        <strong>Author:</strong> {credits.author}
                    </p>
                )}

                {/* Verificar si hay colaboradores */}
                {credits.collaborators.length > 0 && (
                    <p className="credit-item">
                        <strong>Collaborators:</strong> {credits.collaborators.join(', ')}
                    </p>
                )}

                <div className="cta-buttons">
                    {/* Verificar si el repo existe */}
                    {credits.repo && (
                        <a href={credits.repo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary  me-2"><i className="fab fa-github me-1"></i>View on GitHub</a>
                    )}
                    {
                        credits.repoApi && (
                            <a href={credits.repoApi} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2"><i className="fab fa-github me-1"></i>API Repository</a>
                        )
                    }
                    <a href="mailto:luisdavidtrejofuentes@gmail.com" className="btn btn-outline-primary"><i className="fas fa-envelope me-1"></i>Get in Touch</a>
                </div>
            </div>
        </section>
    );
}
