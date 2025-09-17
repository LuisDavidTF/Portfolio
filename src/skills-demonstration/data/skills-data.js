export const skillCategories = {
  LANGUAGES: 'Languages',
  FRAMEWORKS: 'Frameworks & Libraries',
  DATABASES: 'Databases',
  TOOLS: 'Tools & Methodologies'
};

// ==========================================
// SKILLS DATA BY CATEGORY
// ==========================================

export const skillsData = {
  [skillCategories.LANGUAGES]: [
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: 'fab fa-js',
      level: 'advanced',
      experience: '2+ years',
      color: '#F0DB4F',
      textColor: '#000'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: 'fas fa-code',
      level: 'intermediate',
      experience: '1+ year',
      color: '#007ACC',
      textColor: '#fff'
    },
    {
      id: 'html5',
      name: 'HTML5',
      icon: 'fab fa-html5',
      level: 'advanced',
      experience: '3+ years',
      color: '#E34F26',
      textColor: '#fff'
    },
    {
      id: 'css3',
      name: 'CSS3',
      icon: 'fab fa-css3-alt',
      level: 'advanced',
      experience: '3+ years',
      color: '#264DE4',
      textColor: '#fff'
    },
    {
      id: 'sql',
      name: 'SQL',
      icon: 'fas fa-database',
      level: 'intermediate',
      experience: '2+ years',
      color: '#4479A1',
      textColor: '#fff'
    },
    {
      id: 'csharp',
      name: 'C#',
      icon: 'fas fa-code',
      level: 'intermediate',
      experience: '1+ year',
      color: '#68217A',
      textColor: '#fff'
    },
    {
      id: 'java',
      name: 'Java',
      icon: 'fab fa-java',
      level: 'basic',
      experience: '1 year',
      color: '#f89820',
      textColor: '#fff'
    },
    {
      id: 'python',
      name: 'Python',
      icon: 'fab fa-python',
      level: 'basic',
      experience: '6 months',
      color: '#306998',
      textColor: '#fff'
    }
  ],

  [skillCategories.FRAMEWORKS]: [
    {
      id: 'angular',
      name: 'Angular',
      icon: 'fab fa-angular',
      level: 'advanced',
      experience: '2+ years',
      color: '#DD0031',
      textColor: '#fff',
      featured: true // Para destacar en el portfolio
    },
    {
      id: 'react',
      name: 'React',
      icon: 'fab fa-react',
      level: 'intermediate',
      experience: '1+ year',
      color: '#61DAFB',
      textColor: '#000'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      icon: 'fab fa-node',
      level: 'intermediate',
      experience: '1+ year',
      color: '#339933',
      textColor: '#fff',
      featured: true
    },
    {
      id: 'express',
      name: 'Express',
      icon: 'fas fa-server',
      level: 'intermediate',
      experience: '1+ year',
      color: '#000',
      textColor: '#fff',
      featured: true
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      icon: 'fab fa-bootstrap',
      level: 'advanced',
      experience: '2+ years',
      color: '#563d7c',
      textColor: '#fff'
    },
    {
      id: 'tailwind',
      name: 'Tailwind',
      icon: 'fab fa-css3-alt',
      level: 'intermediate',
      experience: '1+ year',
      color: '#38B2AC',
      textColor: '#fff'
    },
    {
      id: 'spring-boot',
      name: 'Spring Boot',
      icon: 'fab fa-java',
      level: 'intermediate',
      experience: '1+ year',
      color: '#6DB33F',
      textColor: '#fff'
    }
  ],

  [skillCategories.DATABASES]: [
    {
      id: 'mysql',
      name: 'MySQL',
      icon: 'fas fa-database',
      level: 'intermediate',
      experience: '2+ years',
      color: '#4479A1',
      textColor: '#fff',
      featured: true
    },
    {
      id: 'sqlserver',
      name: 'SQL Server',
      icon: 'fas fa-database',
      level: 'basic',
      experience: '1 year',
      color: '#CC2927',
      textColor: '#fff'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      icon: 'fas fa-leaf',
      level: 'basic',
      experience: '6 months',
      color: '#4DB33D',
      textColor: '#fff'
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      icon: 'fas fa-database',
      level: 'basic',
      experience: '0',
      color: '#336791',
      textColor: '#fff'
    }

  ],

  [skillCategories.TOOLS]: [
    {
      id: 'git',
      name: 'Git',
      icon: 'fab fa-git-alt',
      level: 'intermediate',
      experience: '2+ years',
      color: '#F1502F',
      textColor: '#fff'
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: 'fab fa-github',
      level: 'intermediate',
      experience: '2+ years',
      color: '#171515',
      textColor: '#fff'
    },
    {
      id: 'mvc',
      name: 'MVC',
      icon: 'fas fa-file-code',
      level: 'intermediate',
      experience: '1+ year',
      color: '#6c757d',
      textColor: '#fff'
    },
    {
      id: 'restapi',
      name: 'REST API',
      icon: 'fas fa-network-wired',
      level: 'intermediate',
      experience: '1+ year',
      color: '#00AEEF',
      textColor: '#fff'
    },
    {
      id: 'scrum',
      name: 'Scrum/Agile',
      icon: 'fas fa-project-diagram',
      level: 'basic',
      experience: '1 year',
      color: '#FFCA28',
      textColor: '#000'
    },
    {
      id: 'stripe',
      name: 'Stripe API',
      icon: 'fas fa-credit-card',
      level: 'intermediate',
      experience: '6 months',
      color: '#6772E5',
      textColor: '#fff',
      featured: true
    },
    {
      id: 'jwt',
      name: 'JWT',
      icon: 'fas fa-key',
      level: 'basic',
      experience: '6 months',
      color: '#000',
      textColor: '#fff'
    },
    {
      id: 'vscode',
      name: 'VS Code',
      icon: 'fas fa-code',
      level: 'advanced',
      experience: '3+ years',
      color: '#007ACC',
      textColor: '#fff'
    },
    {
      id: 'google-oauth',
      name: 'Google OAuth',
      icon: 'fab fa-google',
      level: 'intermediate',
      experience: '1+ year',
      color: '#4285F4',
      textColor: '#fff'
    }
  ]
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Obtiene todas las skills organizadas por categoría
 * @returns {Object} Objeto con todas las categorías y sus skills
 */
export const getAllSkills = () => skillsData;

/**
 * Obtiene skills de una categoría específica
 * @param {string} category - Nombre de la categoría
 * @returns {Array} Array de skills de la categoría
 */
export const getSkillsByCategory = (category) => {
  return skillsData[category] || [];
};

/**
 * Obtiene todas las skills en un array plano
 * @returns {Array} Array con todas las skills
 */
export const getAllSkillsFlat = () => {
  return Object.values(skillsData).flat();
};

/**
 * Obtiene skills destacadas (featured: true)
 * @returns {Array} Array de skills destacadas
 */
export const getFeaturedSkills = () => {
  return getAllSkillsFlat().filter(skill => skill.featured);
};

/**
 * Obtiene skills por nivel
 * @param {string} level - Nivel: 'basic', 'intermediate', 'advanced'
 * @returns {Array} Array de skills del nivel especificado
 */
export const getSkillsByLevel = (level) => {
  return getAllSkillsFlat().filter(skill => skill.level === level);
};

/**
 * Busca una skill específica por ID
 * @param {string} skillId - ID de la skill
 * @returns {Object|null} Objeto de la skill o null si no existe
 */
export const getSkillById = (skillId) => {
  return getAllSkillsFlat().find(skill => skill.id === skillId) || null;
};

/**
 * Obtiene skills por IDs específicos (útil para proyectos)
 * @param {Array} skillIds - Array de IDs de skills
 * @returns {Array} Array de skills encontradas
 */
export const getSkillsByIds = (skillIds) => {
  return skillIds.map(id => getSkillById(id)).filter(Boolean);
};

/**
 * Obtiene estadísticas de skills
 * @returns {Object} Objeto con estadísticas
 */
export const getSkillsStats = () => {
  const allSkills = getAllSkillsFlat();
  const byLevel = {
    basic: getSkillsByLevel('basic').length,
    intermediate: getSkillsByLevel('intermediate').length,
    advanced: getSkillsByLevel('advanced').length
  };

  return {
    total: allSkills.length,
    byCategory: Object.keys(skillsData).reduce((acc, category) => {
      acc[category] = skillsData[category].length;
      return acc;
    }, {}),
    byLevel,
    featured: getFeaturedSkills().length
  };
};

// ==========================================
// CATEGORÍAS ORDENADAS PARA DISPLAY
// ==========================================

export const orderedCategories = [
  skillCategories.LANGUAGES,
  skillCategories.FRAMEWORKS,
  skillCategories.DATABASES,
  skillCategories.TOOLS
];

// ==========================================
// CONFIGURACIÓN DE DISPLAY
// ==========================================

export const skillsDisplayConfig = {
  // Número máximo de skills a mostrar por categoría por defecto
  maxSkillsPerCategory: 8,

  // Mostrar badges de nivel
  showLevelBadges: true,

  // Mostrar indicador de experiencia
  showExperience: false,

  // Animación al hacer hover
  enableHoverEffects: true,

  // Tamaño por defecto de los iconos
  defaultSize: 'medium', // small, medium, large

  // Variante por defecto
  defaultVariant: 'skill' // skill, project
};