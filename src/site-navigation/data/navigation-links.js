import { personalInfo } from '../../personal-branding/data/personal-info.js';

// ==========================================
// TIPOS DE NAVEGACIÓN
// ==========================================

export const navigationType = {
  INTERNAL: 'internal', // Navegación interna (scroll)
  EXTERNAL: 'external', // Enlaces externos
  ROUTE: 'route',       // Routing interno (si usas React Router)
  ACTION: 'action'      // Acciones especiales (modal, etc.)
};

// ==========================================
// NAVEGACIÓN PRINCIPAL
// ==========================================

export const mainNavigationLinks = [
  {
    id: 'home',
    label: 'Home',
    href: '#/',
    icon: 'fas fa-house',
    type: navigationType.ROUTE,
    showInNavbar: false,
    showInMobile: true,
    description: 'Go to top',
    shortLabel: 'Home'
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
    icon: 'fas fa-user',
    type: navigationType.INTERNAL,
    priority: 2,
    showInNavbar: true,
    showInMobile: true,
    description: 'About me',
    shortLabel: 'About'
  },
  {
    id: 'skills',
    label: 'Skills',
    href: '#skills',
    icon: 'fas fa-tools',
    type: navigationType.INTERNAL,
    priority: 3,
    showInNavbar: true,
    showInMobile: true,
    description: 'My technical skills',
    shortLabel: 'Skills'
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects',
    icon: 'fas fa-code',
    type: navigationType.INTERNAL,
    priority: 4,
    showInNavbar: true,
    showInMobile: true,
    description: 'View my projects',
    shortLabel: 'Projects'
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    icon: 'fas fa-envelope',
    type: navigationType.INTERNAL,
    priority: 5,
    showInNavbar: true,
    showInMobile: true,
    description: 'Get in touch',
    shortLabel: 'Contact'
  },
  {
    id: 'documentation',
    label: 'Documentation',
    href: '#/documentation',
    icon: 'fas fa-book',
    type: navigationType.ROUTE,
    priority: 6,
    showInNavbar: true,
    showInMobile: true,
    description: 'Project documentation',
    shortLabel: 'Docs',
    isNew: true,
    badge: 'NEW'
  },
];

// ==========================================
// NAVEGACIÓN DEL MENÚ MÓVIL EXTENDIDA
// ==========================================

export const mobileMenuSections = {

  preferences: {
    title: 'Preferences',
    icon: 'fas fa-cog',
    items: [
      {
        id: 'theme-toggle',
        label: 'Dark Mode',
        icon: 'fas fa-moon',
        type: navigationType.ACTION,
        action: 'toggleTheme',
        description: 'Switch theme',
        isToggle: true,
        isNew: true,
        badge: 'NEW'
      }/*,
      {
        id: 'language',
        label: 'Language',
        icon: 'fas fa-globe',
        type: navigationType.ACTION,
        action: 'toggleLanguage',
        description: 'Change language',
        options: ['EN', 'ES'],
        isNew: true,
        badge: 'NEW'
      }*/
    ]
  },

  resources: {
    title: 'Resources',
    icon: 'fas fa-download',
    items: [
      /* {
        id: 'cv-download',
        label: 'Download CV',
        icon: 'fas fa-file-pdf',
        type: navigationType.ACTION,
        action: 'downloadCV',
        description: 'Download my CV',
        external: true,
        isNew: true,
        badge: 'NEW'
      }, */
      {
        id: 'github-profile',
        label: 'GitHub Profile',
        href: personalInfo.contact.social.github.url,
        icon: 'fab fa-github',
        type: navigationType.EXTERNAL,
        description: 'View GitHub profile',
        isNew: false,
        badge: 'NEW'
      },
      {
        id: 'linkedin-profile',
        label: 'LinkedIn',
        href: personalInfo.contact.social.linkedin.url,
        icon: 'fab fa-linkedin',
        type: navigationType.EXTERNAL,
        description: 'Connect on LinkedIn',
        isNew: true,
        badge: 'NEW'
      }
    ]
  }
};

// ==========================================
// CONFIGURACIÓN DE NAVEGACIÓN
// ==========================================

export const navigationConfig = {
  navbar: {
    showLogo: true,
    logoText: personalInfo.firstName,
    logoIcon: 'fas fa-home',
    maxVisibleLinks: 4,
    showMoreDropdown: true,
    enableSearch: false,
    stickyNavbar: true,
    transparentOnTop: true
  },

  mobileMenu: {
    showUserInfo: true,
    showSections: true,
    enableAnimations: true,
    blurBackground: true,
    closeOnItemClick: true,
    showFooterInfo: true
  },

  scrollBehavior: {
    smooth: true,
    offset: 70, // Altura del navbar
    duration: 800
  }
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Obtiene enlaces de navegación para el navbar
 * @returns {Array} Enlaces visibles en navbar
 */
export const getNavbarLinks = () => {
  return mainNavigationLinks
    .filter(link => link.showInNavbar)
    .slice(0, navigationConfig.navbar.maxVisibleLinks)
    .sort((a, b) => a.priority - b.priority);
};

/**
 * Obtiene enlaces adicionales para dropdown "More"
 * @returns {Array} Enlaces adicionales
 */
export const getMoreLinks = () => {
  const navbarLinks = getNavbarLinks();
  const navbarIds = navbarLinks.map(link => link.id);

  return mainNavigationLinks
    .filter(link => !navbarIds.includes(link.id) && link.showInNavbar)
    .sort((a, b) => a.priority - b.priority);
};

/**
 * Obtiene todos los enlaces de navegación ordenados
 * @returns {Array} Todos los enlaces ordenados por prioridad
 */
export const getAllNavigationLinks = () => {
  return [...mainNavigationLinks].sort((a, b) => a.priority - b.priority);
};

/**
 * Obtiene enlaces para menú móvil por sección
 * @param {string} sectionName - Nombre de la sección
 * @returns {Array} Enlaces de la sección
 */
export const getMobileMenuSection = (sectionName) => {
  return mobileMenuSections[sectionName]?.items || [];
};

/**
 * Obtiene todas las secciones del menú móvil
 * @returns {Object} Todas las secciones
 */
export const getAllMobileMenuSections = () => {
  return mobileMenuSections;
};

/**
 * Busca un enlace por ID
 * @param {string} linkId - ID del enlace
 * @returns {Object|null} Enlace encontrado o null
 */
export const getNavigationLinkById = (linkId) => {
  // Buscar en navegación principal
  let link = mainNavigationLinks.find(item => item.id === linkId);
  if (link) return link;

  // Buscar en secciones del menú móvil
  for (const section of Object.values(mobileMenuSections)) {
    link = section.items.find(item => item.id === linkId);
    if (link) return link;
  }

  return null;
};

/**
 * Maneja navegación según tipo de enlace
 * @param {Object} link - Enlace de navegación
 * @param {Function} customHandler - Handler personalizado para acciones
 */
export const handleNavigation = (link, customHandler = null) => {
  switch (link.type) {
    case navigationType.INTERNAL:
      // Scroll suave a sección
      const element = document.querySelector(link.href);
      if (element) {
        const offsetTop = element.offsetTop - navigationConfig.scrollBehavior.offset;
        window.scrollTo({
          top: offsetTop,
          behavior: navigationConfig.scrollBehavior.smooth ? 'smooth' : 'auto'
        });
      }
      break;

    case navigationType.EXTERNAL:
      // Abrir en nueva pestaña
      window.open(link.href, '_blank', 'noopener,noreferrer');
      break;

    case navigationType.ROUTE:
      // Navegación interna (React Router)
      window.location.href = link.href;
      break;

    case navigationType.ACTION:
      // Acción personalizada
      if (customHandler) {
        customHandler(link.action, link);
      } else {
        console.log(`Action: ${link.action}`, link);
      }
      break;

    default:
      console.warn('Unknown navigation type:', link.type);
  }
};

/**
 * Obtiene el enlace activo basado en la URL actual
 * @returns {Object|null} Enlace activo
 */
export const getActiveNavigationLink = () => {
  const currentHash = window.location.hash;
  const currentPath = window.location.pathname;

  return mainNavigationLinks.find(link => {
    if (link.type === navigationType.INTERNAL) {
      return link.href === currentHash;
    }
    if (link.type === navigationType.ROUTE) {
      return link.href === currentPath;
    }
    return false;
  }) || null;
};

/**
 * Genera breadcrumbs para navegación
 * @returns {Array} Breadcrumbs
 */
export const getNavigationBreadcrumbs = () => {
  const activeLink = getActiveNavigationLink();
  const breadcrumbs = [
    { label: 'Home', href: '#home', active: false }
  ];

  if (activeLink && activeLink.id !== 'home') {
    breadcrumbs.push({
      label: activeLink.label,
      href: activeLink.href,
      active: true
    });
  } else {
    breadcrumbs[0].active = true;
  }

  return breadcrumbs;
};

// ==========================================
// CONFIGURACIÓN PARA DIFERENTES BREAKPOINTS
// ==========================================

export const responsiveNavigationConfig = {
  mobile: {
    breakpoint: 768,
    showLabels: false,
    maxVisibleItems: 3,
    useBottomBar: false
  },

  tablet: {
    breakpoint: 1024,
    showLabels: true,
    maxVisibleItems: 5,
    useDropdowns: true
  },

  desktop: {
    breakpoint: 1200,
    showLabels: true,
    maxVisibleItems: 6,
    showAllItems: true
  }
};