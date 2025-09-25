import { useState } from 'react';
import { 
  getAllProjects, 
  getFeaturedProjects,
  getProjectsByCategory,
  getProjectsByStatus,
  projectCategories,
  projectStatus,
  statusLabels,
  projectsDisplayConfig 
} from '../data/projects-data.js';
import ProjectCard from './ProjectCard.jsx';

/**
 * ProjectsContainer - Contenedor principal de la sección Projects
 */
export default function ProjectsContainer({
  showTitle = true,
  showOnlyFeatured = false,
  enableFiltering = false,
  enableSorting = false,
  maxProjects = null,
  layout = 'grid', // 'grid', 'list', 'masonry'
  className = ''
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('priority'); // 'priority', 'name', 'date'

  // Obtener proyectos según configuración
  const getProjectsToShow = () => {
    let projects = showOnlyFeatured ? getFeaturedProjects() : getAllProjects();
    
    // Filtrar por categoría
    if (selectedCategory !== 'all') {
      projects = projects.filter(project => project.category === selectedCategory);
    }
    
    // Filtrar por estado
    if (selectedStatus !== 'all') {
      projects = projects.filter(project => project.status === selectedStatus);
    }
    
    // Ordenar
    projects = [...projects].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'date':
          return new Date(b.startDate) - new Date(a.startDate);
        case 'priority':
        default:
          return a.priority - b.priority;
      }
    });
    
    // Limitar cantidad
    if (maxProjects) {
      projects = projects.slice(0, maxProjects);
    }
    
    return projects;
  };

  const projectsToShow = getProjectsToShow();
  const totalProjects = getAllProjects().length;
  const featuredCount = getFeaturedProjects().length;

  const getContainerClasses = () => {
    const baseClasses = `container my-5 ${className}`;
    const layoutClasses = {
      grid: 'projects-grid',
      list: 'projects-list',
      masonry: 'projects-masonry'
    };
    
    return `${baseClasses} ${layoutClasses[layout]}`.trim();
  };

  const getProjectsGridClasses = () => {
    const gridClasses = {
      grid: 'row justify-content-center g-4',
      list: 'projects-list-container',
      masonry: 'row g-4'
    };
    
    return gridClasses[layout] || gridClasses.grid;
  };

  return (
    <section className={getContainerClasses()} id="projects">
      {/* Título y estadísticas */}
      {showTitle && (
        <div className="projects-header text-center mb-4">
          <h2 className="section-title">Projects</h2>
          <p className="text-secondary">
            {showOnlyFeatured 
              ? `${featuredCount} featured project${featuredCount !== 1 ? 's' : ''}`
              : `${totalProjects} project${totalProjects !== 1 ? 's' : ''} showcasing my development journey`
            }
          </p>
        </div>
      )}

      {/* Controles de filtrado (opcional) */}
      {enableFiltering && (
        <div className="projects-filters mb-4">
          <div className="row justify-content-center">
            {/* Filtro por categoría */}
            <div className="col-auto">
              <select 
                className="form-select form-select-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {Object.values(projectCategories).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Filtro por estado */}
            <div className="col-auto">
              <select 
                className="form-select form-select-sm"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                {Object.entries(statusLabels).map(([status, label]) => (
                  <option key={status} value={status}>{label}</option>
                ))}
              </select>
            </div>

            {/* Ordenamiento */}
            {enableSorting && (
              <div className="col-auto">
                <select 
                  className="form-select form-select-sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="priority">By Priority</option>
                  <option value="name">By Name</option>
                  <option value="date">By Date</option>
                </select>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Grid de proyectos */}
      {projectsToShow.length > 0 ? (
        <div className={getProjectsGridClasses()}>
          {projectsToShow.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              layout={layout}
              animationDelay={index * 0.1}
              className={layout === 'grid' ? 'col-lg-6 col-xl-4' : ''}
            />
          ))}
        </div>
      ) : (
        <div className="no-projects text-center">
          <div className="no-projects-content">
            <i className="fas fa-search fa-3x text-secondary mb-3"></i>
            <h5 className="text-secondary">No projects found</h5>
            <p className="text-secondary">Try adjusting your filters</p>
            <button 
              className="btn btn-outline-primary"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedStatus('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}

      {/* Call to action */}
      {!showOnlyFeatured && projectsToShow.length > 0 && (
        <div className="projects-cta text-center mt-5">
          <p className="text-secondary mb-3">
            Interested in seeing more projects or discussing collaboration?
          </p>
          <div className="cta-buttons">
            <a 
              href="https://github.com/LuisDavidTF" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-primary me-2"
            >
              <i className="fab fa-github me-1"></i>
              View All on GitHub
            </a>
            <a 
              href="mailto:luisdavidtrejofuentes@gmail.com"
              className="btn btn-outline-primary"
            >
              <i className="fas fa-envelope me-1"></i>
              Get in Touch
            </a>
          </div>
        </div>
      )}

      {/* Indicador de más proyectos */}
      {maxProjects && getAllProjects().length > maxProjects && (
        <div className="more-projects-indicator text-center mt-4">
          <small className="text-secondary">
            Showing {projectsToShow.length} of {getAllProjects().length} projects
          </small>
        </div>
      )}
    </section>
  );
}