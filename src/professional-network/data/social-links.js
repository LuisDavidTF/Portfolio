import { getSocialLinks, getContactInfo, personalInfo } from '../../personal-branding/data/personal-info.js';

// ==========================================
// CONFIGURACIÓN DE ENLACES SOCIALES
// ==========================================

export const socialPlatforms = {
  GITHUB: 'github',
  LINKEDIN: 'linkedin',
  EMAIL: 'email',
  TWITTER: 'twitter',
  INSTAGRAM: 'instagram',
  YOUTUBE: 'youtube',
  PORTFOLIO: 'portfolio'
};

// ==========================================
// ENLACES SOCIALES EXTENDIDOS
// ==========================================

export const extendedSocialLinks = {
  // Datos principales desde personal-info
  ...getSocialLinks(),
  
  // Email como enlace social
  email: {
    url: `mailto:${getContactInfo().email}`,
    username: getContactInfo().emailDisplay,
    display: 'Email',
    icon: 'fas fa-envelope',
    color: '#EA4335',
    hoverColor: '#d73527',
    platform: socialPlatforms.EMAIL,
    priority: 1,
    showInFooter: true
  },
  
  // Enlaces adicionales (si quieres expandir en el futuro)
  twitter: {
    url: 'https://twitter.com/LuisDavidTrejo2', // placeholder
    username: '@LuisDavidTF',
    display: 'Twitter',
    icon: 'fab fa-twitter',
    color: '#1DA1F2',
    hoverColor: '#0d8bd9',
    platform: socialPlatforms.TWITTER,
    priority: 4,
    showInFooter: false, // Deshabilitado por ahora
    enabled: false
  },
  
  portfolio: {
    url: 'https://luisdavidtf.github.io/Portfolio/',
    username: 'Portfolio',
    display: 'Portfolio',
    icon: 'fas fa-home',
    color: '#6c757d',
    hoverColor: '#495057',
    platform: socialPlatforms.PORTFOLIO,
    priority: 5,
    showInFooter: false,
    enabled: false
  }
};

// Agregar propiedades adicionales a los enlaces existentes
extendedSocialLinks.github = {
  ...extendedSocialLinks.github,
  icon: 'fab fa-github',
  color: '#333',
  hoverColor: '#000',
  platform: socialPlatforms.GITHUB,
  priority: 2,
  showInFooter: true,
  enabled: true
};

extendedSocialLinks.linkedin = {
  ...extendedSocialLinks.linkedin,
  icon: 'fab fa-linkedin',
  color: '#0077B5',
  hoverColor: '#005582',
  platform: socialPlatforms.LINKEDIN,
  priority: 3,
  showInFooter: true,
  enabled: true
};

// ==========================================
// CONFIGURACIÓN DE DISPLAY
// ==========================================

export const socialDisplayConfig = {
  footer: {
    title: 'Connect',
    showTitle: true,
    showOnlyEnabled: true,
    showOnlyInFooter: true,
    maxLinks: 5,
    layout: 'horizontal', // 'horizontal', 'vertical', 'grid'
    iconSize: 'medium', // 'small', 'medium', 'large'
    showLabels: false,
    showTooltips: true,
    enableHoverEffects: true,
    animateOnHover: true
  },
  
  contact: {
    showTitle: true,
    showLabels: true,
    showTooltips: false,
    layout: 'vertical',
    iconSize: 'small'
  },
  
  navbar: {
    showTitle: false,
    showLabels: false,
    maxLinks: 3,
    layout: 'horizontal',
    iconSize: 'small'
  }
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Obtiene enlaces sociales habilitados
 * @returns {Array} Array de enlaces habilitados
 */
export const getEnabledSocialLinks = () => {
  return Object.values(extendedSocialLinks)
    .filter(link => link.enabled !== false)
    .sort((a, b) => (a.priority || 999) - (b.priority || 999));
};

/**
 * Obtiene enlaces para mostrar en footer
 * @returns {Array} Array de enlaces para footer
 */
export const getFooterSocialLinks = () => {
  return Object.values(extendedSocialLinks)
    .filter(link => link.showInFooter && link.enabled !== false)
    .sort((a, b) => (a.priority || 999) - (b.priority || 999));
};

/**
 * Obtiene un enlace social específico
 * @param {string} platform - Plataforma social
 * @returns {Object|null} Enlace social o null
 */
export const getSocialLinkByPlatform = (platform) => {
  return Object.values(extendedSocialLinks)
    .find(link => link.platform === platform) || null;
};

/**
 * Obtiene enlaces sociales por contexto
 * @param {string} context - Contexto: 'footer', 'contact', 'navbar'
 * @returns {Array} Array de enlaces para el contexto
 */
export const getSocialLinksByContext = (context) => {
  const config = socialDisplayConfig[context];
  if (!config) return [];
  
  let links = getEnabledSocialLinks();
  
  // Filtrar por contexto específico
  if (context === 'footer') {
    links = getFooterSocialLinks();
  }
  
  // Aplicar límite máximo
  if (config.maxLinks) {
    links = links.slice(0, config.maxLinks);
  }
  
  return links;
};

/**
 * Genera datos para analytics/tracking
 * @param {string} platform - Plataforma clickeada
 * @param {string} context - Contexto del click
 * @returns {Object} Datos para tracking
 */
export const generateSocialClickData = (platform, context) => {
  return {
    event: 'social_link_click',
    platform,
    context,
    timestamp: new Date().toISOString(),
    url: getSocialLinkByPlatform(platform)?.url
  };
};

/**
 * Maneja clicks en enlaces sociales
 * @param {string} platform - Plataforma
 * @param {string} context - Contexto
 */
export const handleSocialClick = (platform, context = 'footer') => {
  const clickData = generateSocialClickData(platform, context);
  
  // Log para desarrollo
  console.log('Social link clicked:', clickData);
  
  // Aquí podrías enviar a analytics
  // gtag('event', 'click', clickData);
};

// ==========================================
// ESTILOS DINÁMICOS
// ==========================================

/**
 * Genera estilos CSS para un enlace social
 * @param {Object} link - Enlace social
 * @param {string} state - Estado: 'default', 'hover'
 * @returns {Object} Objeto de estilos
 */
export const getSocialLinkStyles = (link, state = 'default') => {
  const baseStyles = {
    color: link.color,
    transition: 'all 0.3s ease',
    textDecoration: 'none'
  };
  
  if (state === 'hover') {
    return {
      ...baseStyles,
      color: link.hoverColor,
      transform: 'translateY(-2px)',
      boxShadow: `0 4px 8px ${link.color}33`
    };
  }
  
  return baseStyles;
};

/**
 * Genera clases CSS dinámicas
 * @param {Object} link - Enlace social
 * @param {string} context - Contexto
 * @returns {string} Clases CSS
 */
export const getSocialLinkClasses = (link, context) => {
  const config = socialDisplayConfig[context];
  const baseClasses = 'social-link';
  const sizeClass = `social-link-${config.iconSize}`;
  const platformClass = `social-link-${link.platform}`;
  const hoverClass = config.enableHoverEffects ? 'social-link-hover' : '';
  
  return `${baseClasses} ${sizeClass} ${platformClass} ${hoverClass}`.trim();
};