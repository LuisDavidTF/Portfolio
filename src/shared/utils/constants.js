export const PERSONAL_INFO = {
  name: 'Luis David Trejo Fuentes',
  title: 'Full Stack Developer in Training',
  tagline: 'Building scalable web solutions with modern technologies.',
  email: 'luisdavidtf@example.com', // Actualiza con tu email real
  location: 'Tulancingo, Hidalgo, MX'
};

/**
 * URLs y enlaces externos
 */
export const EXTERNAL_LINKS = {
  github: 'https://github.com/LuisDavidTF',
  linkedin: 'https://www.linkedin.com/in/luis-david-trejo-fuentes/',
  email: 'mailto:luisdavidtf@example.com', // Actualiza con tu email real
};

/**
 * Configuración de navegación
 */
export const NAVIGATION = {
  sections: [
    { id: 'hero', label: 'Inicio', href: '#hero' },
    { id: 'projects', label: 'Proyectos', href: '#projects' },
    { id: 'skills', label: 'Habilidades', href: '#skills' },
    { id: 'contact', label: 'Contacto', href: '#contact' }
  ],
  mobileMenuItems: [
    { id: 'theme', label: 'Cambiar Tema', type: 'toggle' },
    { id: 'language', label: 'Language', type: 'selector' },
    { id: 'cv-download', label: 'Descargar CV', type: 'download' },
    { id: 'github', label: 'GitHub Completo', type: 'external', href: 'https://github.com/LuisDavidTF' }
  ]
};

/**
 * Configuración de temas
 */
export const THEMES = {
  light: {
    name: 'light',
    label: 'Claro',
    icon: '☀️'
  },
  dark: {
    name: 'dark',
    label: 'Oscuro',
    icon: '🌙'
  }
};

/**
 * Configuración de idiomas
 */
export const LANGUAGES = {
  es: {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
    cvFile: '/assets/files/cv-es.pdf'
  },
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    cvFile: '/assets/files/cv-en.pdf'
  }
};

/**
 * Configuración de animaciones
 */
export const ANIMATIONS = {
  durations: {
    fast: 200,
    normal: 300,
    slow: 500
  },
  easings: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
};

/**
 * Breakpoints responsive
 */
export const BREAKPOINTS = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

/**
 * Z-index layers
 */
export const Z_INDEX = {
  background: -1,
  normal: 1,
  dropdown: 1000,
  modal: 1050,
  navbar: 1100,
  tooltip: 1200
};

/**
 * Configuración de scrolling suave
 */
export const SCROLL_CONFIG = {
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest',
  offset: 80 // Altura del navbar
};

/**
 * Configuración de localStorage keys
 */
export const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  language: 'portfolio-language',
  cookieConsent: 'portfolio-cookie-consent'
};

/**
 * Configuración de cookies
 */
export const COOKIE_CONFIG = {
  consentDuration: 365, // días
  essentialCookies: ['portfolio-theme', 'portfolio-language'],
  analyticalCookies: [] // Agregar si usas Analytics
};

/**
 * URLs de proyectos
 */
export const PROJECT_URLS = {
  velonia: {
    demo: 'https://luisdavidtf.github.io/Velonia-Angular/',
    repo: 'https://github.com/LuisDavidTF/Velonia-Angular'
  }
  // Agregar más proyectos aquí
};

/**
 * Configuración de la documentación
 */
export const DOCUMENTATION_CONFIG = {
  defaultProject: 'velonia',
  sections: [
    { id: 'overview', label: 'Overview', icon: '📖' },
    { id: 'installation', label: 'Instalación', icon: '⚙️' },
    { id: 'tech-stack', label: 'Tech Stack', icon: '🛠️' },
    { id: 'database', label: 'Base de Datos', icon: '🗄️' }
  ]
};

/**
 * Validaciones y límites
 */
export const LIMITS = {
  maxProjectsPerPage: 6,
  maxSkillsPerCategory: 10,
  maxRecentProjects: 3
};

export default {
  PERSONAL_INFO,
  EXTERNAL_LINKS,
  NAVIGATION,
  THEMES,
  LANGUAGES,
  ANIMATIONS,
  BREAKPOINTS,
  Z_INDEX,
  SCROLL_CONFIG,
  STORAGE_KEYS,
  COOKIE_CONFIG,
  PROJECT_URLS,
  DOCUMENTATION_CONFIG,
  LIMITS
};