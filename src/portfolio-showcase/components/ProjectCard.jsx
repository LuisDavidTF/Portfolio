import { useState } from 'react';
import { getProjectSkills, statusIcons } from '../data/projects-data.js';
import { statusLabels, statusColors } from '../data/projects-data.js';
import TechStackDisplay from './TechStackDisplay.jsx';

/**
 * ProjectCard - Tarjeta individual de proyecto
 */
export default function ProjectCard({
  project,
  layout = 'grid',
  showFullDescription = false,
  showTechStack = true,
  showStats = true,
  enableImageLazyLoading = true,
  animationDelay = 0,
  className = ''
}) {
  const [imageLoaded, setImageLoaded] = useState(!enableImageLazyLoading);
  const [showFullDesc, setShowFullDesc] = useState(showFullDescription);

  const projectSkills = getProjectSkills(project.id);

  const getCardClasses = () => {
    const baseClasses = 'project-card h-100';
    const layoutClasses = {
      grid: 'card shadow-sm',
      list: 'card mb-4',
      compact: 'card card-compact'
    };
    const animationClass = 'animate-fade-in-up';

    return `${baseClasses} ${layoutClasses[layout]} ${animationClass} ${className}`.trim();
  };

  const getImageClasses = () => {
    return `img-fluid ${layout === 'grid' ? 'rounded-top' : 'rounded'} project-image`;
  };

  const getDescriptionText = () => {
    if (showFullDesc || layout === 'list') {
      return project.description;
    }

    // Truncar descripción para grid/compact
    const maxLength = layout === 'compact' ? 100 : 150;
    if (project.description.length <= maxLength) {
      return project.description;
    }

    return project.description.substring(0, maxLength) + '...';
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const renderProjectBadges = () => {
    return (
      <div className="project-badges">
        {/* Badge de estado */}
        {
          <span
            className="badge text-dark me-2"
            style={{
              backgroundColor: statusColors[project.status],
              color: '#fff'
            }}
          >
            <i className={statusIcons[project.status]}></i>
            {statusLabels[project.status]}
          </span>

        }

        {/* Badge de proyecto destacado */}
        {project.featured && (
          <span className="bg-warning badge text-dark me-2">
            <i className="fas fa-star me-1"></i>
            Featured
          </span>
        )}

        {/* Badge de categoría */}
        <span className="badge bg-secondary">
          {project.category}
        </span>
      </div>
    );
  };

  const renderProjectStats = () => {
    if (!showStats || !project.stats) return null;

    return (
      <div className="project-stats mt-2">
        <div className="row text-center">
          <div className="col-3">
            <small className="d-block text fw-bold">{project.stats.linesOfCode}</small>
            <small className="text-secondary">Lines</small>
          </div>
          <div className="col-3">
            <small className="d-block text fw-bold">{project.stats.commits}</small>
            <small className="text-secondary">Commits</small>
          </div>
          <div className="col-3">
            <small className="d-block text fw-bold">{project.stats.developmentHours}</small>
            <small className="text-secondary">Hours</small>
          </div>
          <div className="col-3">
            <small className="d-block text fw-bold">{project.stats.features}</small>
            <small className="text-secondary">Features</small>
          </div>
        </div>
      </div>
    );
  };
  const renderProjectKeyFeatures = () => {
    if (!project.keyFeatures || project.keyFeatures.length === 0) return null;

    return (
      <div className="project-key-features mb-3">
        <h6 className="fw-bold mb-2">Key Features</h6>
        <ul className="list-unstyled ms-3">
          {project.keyFeatures.map((feature, index) => (
            <li key={index} className="mb-1">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  const renderProjectChallenges = () => {
    if (!project.challenges || project.challenges.length === 0) return null;

    return (
      <div className="project-challenges mb-3">
        <h6 className="fw-bold mb-2">Challenges & Solutions</h6>
        <ul className="list-unstyled ms-3">
          {project.challenges.map((challenge, index) => (
            <li key={index} className="mb-2">
              <div>
                <strong>Problem:</strong> {challenge.problem}
              </div>
              <div>
                <strong>Solution:</strong> {challenge.solution}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  const renderProjectMeta = () => {
    return (
      <div className="project-meta mb-3">
        <div className="row text-secondary small">
          <div className="col-6">
            <div><strong>Category:</strong> {project.category}</div>
            <div><strong>Status:</strong> {project.status}</div>
          </div>
          <div className="col-6">
            <div><strong>Start:</strong> {project.startDate}</div>
            <div>
              <strong>End:</strong> {project.completionDate || 'In Progress'}
            </div>
          </div>
          <div className="col-12 mt-2">
            <div><strong>Priority:</strong> {project.priority}</div>
            <div><strong>Featured:</strong> {project.featured ? 'Yes' : 'No'}</div>
          </div>
        </div>
      </div>
    );
  };

  const renderProjectActions = () => {
    return (
      <div className="project-actions">
        {/* Botón Live Demo */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary me-2"
          >
            <i className="fas fa-external-link-alt me-1"></i>
            Live Demo
          </a>
        )}

        {/* Botón GitHub */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary me-2"
          >
            <i className="fab fa-github me-1"></i>
            GitHub
          </a>
        )}

        {/* Botón GitHub API*/}
        {project.githubApiUrl && (
          <a
            href={project.githubApiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary me-2"
          >
            <i className="fab fa-github me-1"></i>
            GitHub API
          </a>
        )}

        {/* Botón Documentation (nuevo) */}
        {project.documentationUrl && (
          <a
            href={project.documentationUrl}
            className="btn btn-outline-info"
          >
            <i className="fas fa-book me-1"></i>
            Docs
          </a>
        )}
      </div>
    );
  };

  // Layout compacto
  if (layout === 'compact') {
    return (
      <div
        className={getCardClasses()}
        style={{ animationDelay: `${animationDelay}s` }}
      >
        <div className="card-body p-3">
          <div className="row align-items-center">
            <div className="col-auto">
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="rounded project-thumb"
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
              )}
            </div>
            <div className="col">
              <h6 className="card-title mb-1">{project.name}</h6>
              <p className="text small text-secondary mb-2">
                {projectSkills}
                {getDescriptionText()}
              </p>
              {showTechStack && projectSkills.length > 0 && (
                <TechStackDisplay
                  skills={projectSkills}
                  variant="project"
                  maxSkills={4}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Layout destacado específico para Cacomi
  if (layout === 'grid' && project.id === 'cacomi') {
    return (
      <div
        className={`${getCardClasses()} primary-project-card col-12 mb-4`}
        style={{ animationDelay: `${animationDelay}s` }}
      >
        <div className="row g-0 h-100">
          {/* Imagen a la izquierda */}
          <div className="col-lg-6 col-xl-7 position-relative project-image-container-wide">
            {!imageLoaded && enableImageLazyLoading && (
              <div className="image-placeholder d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary-css" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="w-100 h-100 project-image-wide"
              onLoad={() => setImageLoaded(true)}
              style={{
                opacity: imageLoaded ? 1 : 0,
                objectFit: 'cover',
                minHeight: '280px',
                transition: 'opacity 0.3s ease-in-out'
              }}
              loading={enableImageLazyLoading ? 'lazy' : 'eager'}
            />
            {/* Overlay con badges */}
            <div className="project-overlay position-absolute top-0 start-0 p-3">
              <span className="badge bg-warning text-dark me-2 shadow-sm" style={{ fontWeight: '700', letterSpacing: '0.5px' }}>
                <i className="fas fa-crown me-1"></i>
                PRIMARY PROJECT
              </span>
              {renderProjectBadges()}
            </div>
          </div>

          {/* Detalles a la derecha */}
          <div className="col-lg-6 col-xl-5 d-flex flex-column justify-content-center bg-white dark:bg-[#111827]">
            <div className="card-body p-4 p-xl-5 d-flex flex-column h-100 justify-content-center">
              <div className="project-header mb-3">
                <h3 className="title fw-extrabold mb-1" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {project.name}
                </h3>
                {project.tagline && (
                  <p className="project-tagline text-secondary small fw-semibold mb-0">
                    {project.tagline}
                  </p>
                )}
              </div>

              <p className="text mb-4" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                {project.description}
              </p>

              {showTechStack && projectSkills.length > 0 && (
                <div className="project-tech-stack mb-4">
                  <TechStackDisplay
                    skills={projectSkills}
                    variant="detailed"
                    size="small"
                    maxSkills={8}
                  />
                </div>
              )}

              <div className="mt-auto">
                {renderProjectStats()}
                <div className="project-footer mt-4 pt-3 border-top d-flex gap-2">
                  {renderProjectActions()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Layout estándar (grid/list)
  return (
    <div
      className={getCardClasses()}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      {/* Imagen */}
      {project.image && (
        <div className="project-image-container position-relative">
          {!imageLoaded && enableImageLazyLoading && (
            <div className="image-placeholder d-flex align-items-center justify-content-center">
              <div className="spinner-border text-primary-css" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className={getImageClasses()}
            onLoad={() => setImageLoaded(true)}
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
            loading={enableImageLazyLoading ? 'lazy' : 'eager'}
          />

          {/* Overlay con badges */}
          <div className="project-overlay position-absolute top-0 start-0 p-2">
            {renderProjectBadges()}
          </div>
        </div>
      )}

      {/* Contenido */}
      <div className="card-body">
        {/* Título y tagline */}
        <div className="project-header mb-2">
          <h3 className="title fw-bold mb-1">{project.name}</h3>
          {project.tagline && (
            <p className="project-tagline text-secondary small mb-2">
              {project.tagline}
            </p>
          )}
        </div>

        {/* Descripción */}
        <p className="text mb-3">
          {getDescriptionText()}
          {!showFullDesc && project.description.length > 150 && (
            <button
              className="btn btn-link btn-sm p-0 ms-1"
              onClick={() => setShowFullDesc(true)}
            >
              Read more
            </button>
          )}
          
        </p>

        {/* Tech Stack */}
        {showTechStack && projectSkills.length > 0 && (
          <div className="project-tech-stack text mb-3">
            <TechStackDisplay
              skills={projectSkills}
              variant="detailed"
              size="small"
              maxSkills={layout === 'grid' ? 8 : null}
            />
            
          </div>
        )}

        <div>
          {/* Stats */}
          {renderProjectStats()}
        </div>

        {/* Acciones */}
        <div className="project-footer mt-auto">
          {renderProjectActions()}
        </div>
      </div>
    </div>
  );
}