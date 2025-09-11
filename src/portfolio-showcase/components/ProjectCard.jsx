import { useState } from 'react';
import { getProjectSkills } from '../data/projects-data.js';
import { statusLabels, statusColors } from '../data/projects-data.js';
import TechStackDisplay from './TechStackDisplay.jsx';

/**
 * ProjectCard - Tarjeta individual de proyecto
 * Reemplaza la estructura hardcodeada del Projects.jsx original
 */
export default function ProjectCard({ 
  project,
  layout = 'grid', // 'grid', 'list', 'compact'
  showFullDescription = false,
  showTechStack = true,
  showStats = false,
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
        {project.status !== 'completed' && (
          <span 
            className="badge me-2"
            style={{
              backgroundColor: statusColors[project.status],
              color: '#fff'
            }}
          >
            {statusLabels[project.status]}
          </span>
        )}
        
        {/* Badge de proyecto destacado */}
        {project.featured && (
          <span className="badge bg-warning text-dark me-2">
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
            <small className="d-block fw-bold">{project.stats.linesOfCode}</small>
            <small className="text-muted">Lines</small>
          </div>
          <div className="col-3">
            <small className="d-block fw-bold">{project.stats.commits}</small>
            <small className="text-muted">Commits</small>
          </div>
          <div className="col-3">
            <small className="d-block fw-bold">{project.stats.developmentHours}</small>
            <small className="text-muted">Hours</small>
          </div>
          <div className="col-3">
            <small className="d-block fw-bold">{project.stats.features}</small>
            <small className="text-muted">Features</small>
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
        
        {/* Botón Documentation (nuevo) */}
        {project.documentationUrl && (
          <a 
            href={project.documentationUrl}
            className="btn btn-outline-info"
          >
            <i className="fas fa-book me-1"></i>
            Docs
            <span className="badge bg-danger ms-1" style={{fontSize: '8px'}}>NEW</span>
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
              <p className="card-text small text-muted mb-2">
                {getDescriptionText()}
              </p>
              {showTechStack && projectSkills.length > 0 && (
                <TechStackDisplay 
                  skills={projectSkills} 
                  variant="compact"
                  maxSkills={4}
                />
              )}
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
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <img 
            src={project.image} 
            alt={`${project.name} preview`}
            className={getImageClasses()}
            onLoad={handleImageLoad}
            style={{ display: imageLoaded ? 'block' : 'none' }}
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
          <h3 className="card-title fw-bold mb-1">{project.name}</h3>
          {project.tagline && (
            <p className="project-tagline text-muted small mb-2">
              {project.tagline}
            </p>
          )}
        </div>

        {/* Descripción */}
        <p className="card-text mb-3">
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
          <div className="project-tech-stack mb-3">
            <TechStackDisplay 
              skills={projectSkills} 
              variant="project"
              size="small"
              maxSkills={layout === 'grid' ? 8 : null}
            />
          </div>
        )}

        {/* Stats */}
        {renderProjectStats()}

        {/* Acciones */}
        <div className="project-footer mt-auto">
          {renderProjectActions()}
        </div>
      </div>
    </div>
  );
}