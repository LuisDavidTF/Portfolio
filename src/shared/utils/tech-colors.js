export const techColors = {
  // Lenguajes de programación
  JavaScript: { bg: '#F0DB4F', color: '#000' },
  TypeScript: { bg: '#007ACC', color: '#fff' },
  HTML5: { bg: '#E34F26', color: '#fff' },
  CSS3: { bg: '#264DE4', color: '#fff' },
  SQL: { bg: '#4479A1', color: '#fff' },
  'C#': { bg: '#68217A', color: '#fff' },
  Java: { bg: '#f89820', color: '#fff' },
  Python: { bg: '#306998', color: '#fff' },

  // Frameworks & Libraries
  Angular: { bg: '#DD0031', color: '#fff' },
  'Node.js': { bg: '#339933', color: '#fff' },
  Express: { bg: '#000', color: '#fff' },
  Bootstrap: { bg: '#563d7c', color: '#fff' },
  React: { bg: '#61DAFB', color: '#000' },
  Vue: { bg: '#4FC08D', color: '#fff' },
  
  // Bases de datos
  MySQL: { bg: '#4479A1', color: '#fff' },
  'SQL Server': { bg: '#CC2927', color: '#fff' },
  PostgreSQL: { bg: '#316192', color: '#fff' },
  MongoDB: { bg: '#47A248', color: '#fff' },

  // Herramientas & Metodologías
  Git: { bg: '#F1502F', color: '#fff' },
  MVC: { bg: '#6c757d', color: '#fff' },
  'REST API': { bg: '#00AEEF', color: '#fff' },
  'Scrum/Agile': { bg: '#FFCA28', color: '#000' },
  'Stripe API': { bg: '#6772E5', color: '#fff' },
  Stripe: { bg: '#6772E5', color: '#fff' },
  JWT: { bg: '#000', color: '#fff' },
  
  // CSS Frameworks
  Tailwind: { bg: '#38B2AC', color: '#fff' },
  'Tailwind CSS': { bg: '#38B2AC', color: '#fff' },
  
  // Cloud & DevOps
  AWS: { bg: '#FF9900', color: '#000' },
  Docker: { bg: '#2496ED', color: '#fff' },
  
  // Default para tecnologías no definidas
  default: { bg: '#6c757d', color: '#fff' }
};

/**
 * Obtiene los colores de una tecnología
 * @param {string} techName - Nombre de la tecnología
 * @returns {Object} - Objeto con bg y color
 */
export const getTechColors = (techName) => {
  return techColors[techName] || techColors.default;
};

/**
 * Genera el estilo CSS inline para una tecnología
 * @param {string} techName - Nombre de la tecnología
 * @returns {Object} - Estilo CSS inline
 */
export const getTechStyle = (techName) => {
  const colors = getTechColors(techName);
  return {
    backgroundColor: colors.bg,
    color: colors.color
  };
};

/**
 * Lista de todas las tecnologías disponibles
 */
export const availableTechs = Object.keys(techColors).filter(key => key !== 'default');

/**
 * Tecnologías por categoría
 */
export const techCategories = {
  languages: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'C#', 'Java', 'Python'],
  frameworks: ['Angular', 'Node.js', 'Express', 'Bootstrap', 'React', 'Vue'],
  databases: ['MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB'],
  tools: ['Git', 'MVC', 'REST API', 'Scrum/Agile', 'Stripe API', 'JWT', 'Tailwind', 'AWS', 'Docker']
};