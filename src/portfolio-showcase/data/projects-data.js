import { getSkillsByIds } from '../../skills-demonstration/data/skills-data.js';

// ==========================================
// PROJECT CATEGORIES
// ==========================================

export const projectCategories = {
  ECOMMERCE: 'E-commerce',
  WEB_APP: 'Web Application', 
  MOBILE: 'Mobile App',
  API: 'API/Backend',
  FRONTEND: 'Frontend',
  FULLSTACK: 'Full Stack'
};

// ==========================================
// PROJECT STATUS
// ==========================================

export const projectStatus = {
  COMPLETED: 'completed',
  IN_PROGRESS: 'in_progress',
  PLANNING: 'planning',
  MAINTENANCE: 'maintenance'
};

// ==========================================
// PROJECTS DATA
// ==========================================

export const projectsData = [
  {
    id: 'velonia',
    name: 'Velonia',
    tagline: 'E-commerce platform with full inventory management',
    description: 'E-commerce platform with full inventory management, secure payments via Stripe, and responsive UI built with Angular. Features complete product catalog, user authentication, shopping cart, and admin dashboard.',
    longDescription: `Velonia is a comprehensive e-commerce solution built from scratch with modern web technologies. 
    
    The platform includes a complete product management system with variants, categories, and inventory tracking. Users can browse products, add them to cart, and complete purchases securely through Stripe integration.
    
    The admin dashboard provides full control over products, orders, users, and sales analytics. The responsive design ensures optimal experience across all devices.`,
    
    category: projectCategories.ECOMMERCE,
    status: projectStatus.COMPLETED,
    
    // Skills/technologies used (IDs from skills-data.js)
    techStack: ['angular', 'nodejs', 'express', 'mysql', 'stripe', 'jwt','bootstrap', 'scrum', 'tailwind',],
    
    // URLs
    liveUrl: 'https://luisdavidtf.github.io/Velonia-Angular/',
    githubUrl: 'https://github.com/LuisDavidTF/Velonia-Angular',
    documentationUrl: '', // URL interna para la nueva sección de docs
    
    // Media
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    ],
    
    // Metadata
    startDate: '2023-08-01',
    completionDate: '2024-01-15',
    featured: true, // Para mostrar en posición destacada
    priority: 1, // Orden de display (menor = más arriba)
    
    // Features destacadas
    keyFeatures: [
      'Full product catalog with variants and categories',
      'Secure user authentication and authorization', 
      'Shopping cart and checkout process',
      'Stripe payment integration',
      'Inventory management system',
      'Admin dashboard with analytics',
      'Responsive design for all devices',
      'RESTful API architecture'
    ],
    
    // Challenges y soluciones
    challenges: [
      {
        problem: 'Complex product variant management',
        solution: 'Implemented flexible variant system with size, color, and custom attributes'
      },
      {
        problem: 'Secure payment processing',
        solution: 'Integrated Stripe API with proper error handling and webhook validation'
      },
      {
        problem: 'Real-time inventory tracking',
        solution: 'Built automated inventory updates with low-stock alerts'
      }
    ],
    
    // Stats del proyecto
    stats: {
      linesOfCode: '15000+',
      commits: '150+',
      developmentHours: '300+',
      features: 9
    }
  },
  
  // Placeholder para próximos proyectos
  {
    id: 'portfolio-v2',
    name: 'Portfolio V2',
    tagline: 'Modern portfolio with Screaming Architecture',
    description: 'Personal portfolio built with React and modern architecture patterns. Features project showcase, skills demonstration, and integrated documentation system.',
    longDescription: `This portfolio represents a complete architectural overhaul from traditional component organization to Screaming Architecture, making the codebase more maintainable and feature-focused.`,
    
    category: projectCategories.FRONTEND,
    status: projectStatus.IN_PROGRESS,
    
    techStack: ['react', 'javascript', 'html5', 'css3', 'git','bootstrap'],
    
    liveUrl: 'https://luisdavidtf.github.io/Portfolio/',
    githubUrl: 'https://github.com/LuisDavidTF/Portfolio',
    
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
    
    startDate: '2025-09-08',
    completionDate: null,
    featured: false,
    priority: 2,
    
    keyFeatures: [
      'Screaming Architecture implementation',
      'Centralized data management',
      'Reusable component system',
      'Integrated documentation',
      'Responsive design',
      'Dark/Light theme support'
    ],

    // Challenges y soluciones
    challenges: [
      {
        problem: 'Complex product variant management',
        solution: 'Implemented flexible variant system with size, color, and custom attributes'
      },
      {
        problem: 'Secure payment processing',
        solution: 'Integrated Stripe API with proper error handling and webhook validation'
      },
      {
        problem: 'Real-time inventory tracking',
        solution: 'Built automated inventory updates with low-stock alerts'
      }
    ],
    
    // Stats del proyecto
    stats: {
      linesOfCode: '5000+',
      commits: '10+',
      developmentHours: '25+',
      features: 6
    }
  },
{
  id: 'recipe-planner',
  name: 'CulinaSmart',
  tagline: 'Smart Recipe Planner',
  description: 'A web application for personalized recipe, menu & profile management.',
  longDescription: `CulinaSmart is a web platform that empowers users to create, manage, and share recipes easily. It includes secure authentication both via email/password and Google OAuth. Users can personalize their profile, mark favorites, and plan weekly menus intelligently based on available ingredients. A hybrid data setup (MySQL + MongoDB) is used to showcase skills in both relational and NoSQL databases, ensuring both structure and flexibility.`,
  
  category: 'Web Application',
  status: projectStatus.PLANNING,
  
  techStack: [
    'react',
    'spring-boot',
    'mysql',
    'mongodb',
    'jwt',
    'google-oauth',
    'tailwind',
    'scrum'
  ],
  
  liveUrl: '',
  githubUrl: '',
  
  image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',  // suggestion
  // (you may download a similar free image from Pexels or Unsplash that fits usage)
  
  startDate: '2025-09-10',
  completionDate: null,
  featured: false,
  priority: 3,
  
  keyFeatures: [
    'Manual registration + Google sign-in (OAuth 2.0)',
    'User profile customization (photo, username, settings)',
    'Create, edit, delete own recipes',
    'Favorites system for quick access',
    'Weekly menu planner based on inventory',
    'Filtering & searching recipes by ingredients and categories',
    'Hybrid database architecture (MySQL + MongoDB)'
  ],
    
    // Challenges y soluciones
    challenges: [
      {
        problem: 'Complex product variant management',
        solution: 'Implemented flexible variant system with size, color, and custom attributes'
      },
      {
        problem: 'Secure payment processing',
        solution: 'Integrated Stripe API with proper error handling and webhook validation'
      },
      {
        problem: 'Real-time inventory tracking',
        solution: 'Built automated inventory updates with low-stock alerts'
      }
    ],
    
    // Stats del proyecto
    stats: {
      linesOfCode: '0',
      commits: '0',
      developmentHours: '10+',
      features: 8
    }
}


];

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Obtiene todos los proyectos
 * @returns {Array} Array con todos los proyectos
 */
export const getAllProjects = () => projectsData;

/**
 * Obtiene proyectos destacados
 * @returns {Array} Array de proyectos con featured: true
 */
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

/**
 * Obtiene proyectos por categoría
 * @param {string} category - Categoría del proyecto
 * @returns {Array} Array de proyectos de la categoría
 */
export const getProjectsByCategory = (category) => {
  return projectsData.filter(project => project.category === category);
};

/**
 * Obtiene proyectos por estado
 * @param {string} status - Estado del proyecto
 * @returns {Array} Array de proyectos con el estado especificado
 */
export const getProjectsByStatus = (status) => {
  return projectsData.filter(project => project.status === status);
};

/**
 * Obtiene un proyecto específico por ID
 * @param {string} projectId - ID del proyecto
 * @returns {Object|null} Objeto del proyecto o null si no existe
 */
export const getProjectById = (projectId) => {
  return projectsData.find(project => project.id === projectId) || null;
};

/**
 * Obtiene proyectos ordenados por prioridad
 * @returns {Array} Array de proyectos ordenados
 */
export const getProjectsByPriority = () => {
  return [...projectsData].sort((a, b) => a.priority - b.priority);
};

/**
 * Obtiene proyectos que usan una skill específica
 * @param {string} skillId - ID de la skill
 * @returns {Array} Array de proyectos que usan esa skill
 */
export const getProjectsBySkill = (skillId) => {
  return projectsData.filter(project => 
    project.techStack.includes(skillId)
  );
};

/**
 * Obtiene las skills de un proyecto con metadata completa
 * @param {string} projectId - ID del proyecto
 * @returns {Array} Array de skills con metadata completa
 */
export const getProjectSkills = (projectId) => {
  const project = getProjectById(projectId);
  if (!project) return [];
  
  return getSkillsByIds(project.techStack);
};

/**
 * Obtiene estadísticas de todos los proyectos
 * @returns {Object} Objeto con estadísticas
 */
export const getProjectsStats = () => {
  const allProjects = getAllProjects();
  const byCategory = {};
  const byStatus = {};
  
  // Contar por categoría
  Object.values(projectCategories).forEach(category => {
    byCategory[category] = getProjectsByCategory(category).length;
  });
  
  // Contar por estado
  Object.values(projectStatus).forEach(status => {
    byStatus[status] = getProjectsByStatus(status).length;
  });
  
  // Skills más usadas
  const skillUsage = {};
  allProjects.forEach(project => {
    project.techStack.forEach(skillId => {
      skillUsage[skillId] = (skillUsage[skillId] || 0) + 1;
    });
  });
  
  return {
    total: allProjects.length,
    featured: getFeaturedProjects().length,
    byCategory,
    byStatus,
    skillUsage: Object.entries(skillUsage)
      .sort((a, b) => b[1] - a[1])
      .reduce((acc, [skill, count]) => {
        acc[skill] = count;
        return acc;
      }, {})
  };
};

/**
 * Busca proyectos por texto
 * @param {string} searchTerm - Término de búsqueda
 * @returns {Array} Array de proyectos que coinciden
 */
export const searchProjects = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  
  return projectsData.filter(project => {
    return (
      project.name.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.tagline.toLowerCase().includes(term) ||
      project.keyFeatures.some(feature => 
        feature.toLowerCase().includes(term)
      )
    );
  });
};

// ==========================================
// CONFIGURACIÓN DE DISPLAY
// ==========================================

export const projectsDisplayConfig = {
  // Número máximo de proyectos a mostrar por defecto
  maxProjectsToShow: 6,
  
  // Mostrar proyectos en progreso
  showInProgress: true,
  
  // Ordenar por prioridad por defecto
  sortByPriority: true,
  
  // Mostrar tech stack en las cards
  showTechStack: true,
  
  // Mostrar badges de estado
  showStatusBadges: false,
  
  // Truncar descripción en cards
  truncateDescription: true,
  maxDescriptionLength: 150,
  
  // Configuración de imágenes
  imageAspectRatio: '16:9',
  enableImageLazyLoading: true
};

// ==========================================
// MAPEO DE ESTADOS PARA UI
// ==========================================

export const statusIcons={
  [projectStatus.COMPLETED]: 'fas fa-check',
  [projectStatus.IN_PROGRESS]: 'fas fa-hourglass-half', 
  [projectStatus.PLANNING]: 'fas fa-calendar',
  [projectStatus.MAINTENANCE]: 'fas fa-wrench'
}

export const statusLabels = {
  [projectStatus.COMPLETED]: 'Completed',
  [projectStatus.IN_PROGRESS]: 'In Progress', 
  [projectStatus.PLANNING]: 'Planning',
  [projectStatus.MAINTENANCE]: 'Maintenance'
};

export const statusColors = {
  [projectStatus.COMPLETED]: '#22c55e', // green
  [projectStatus.IN_PROGRESS]: '#f59e0b', // amber
  [projectStatus.PLANNING]: '#6b7280', // gray
  [projectStatus.MAINTENANCE]: '#3b82f6' // blue
};