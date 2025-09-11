export const personalInfo = {
  // Información principal
  fullName: 'Luis David Trejo Fuentes',
  firstName: 'Luis David',
  lastName: 'Trejo Fuentes',
  
  // Títulos y roles
  currentTitle: 'Full Stack Developer in Training',
  alternativeTitles: [
    'Full Stack Developer',
    'Angular Developer',
    'Web Developer',
    'Software Developer in Training'
  ],
  
  // Tagline/elevator pitch
  tagline: 'Building scalable web solutions with modern technologies.',
  shortTagline: 'Modern web solutions builder',
  
  // Biografías de diferentes longitudes
  shortBio: 'Full Stack developer in training with experience in Angular, Node.js, Express, Stripe, and MySQL.',
  
  mediumBio: `Full Stack developer in training with experience in Angular, Node.js, Express, 
  Stripe, and MySQL. Led the development of Velonia, an e-commerce platform with 
  inventory management and secure payment integration.`,
  
  longBio: `Passionate Full Stack developer in training with hands-on experience building modern web applications. 
  Specialized in Angular frontend development and Node.js backend services, with expertise in database design 
  and payment system integration.
  
  Led the complete development of Velonia, a comprehensive e-commerce platform featuring inventory management, 
  secure Stripe payments, user authentication, and responsive design. Currently expanding skills in React 
  and modern architecture patterns while building scalable, maintainable applications.
  
  Committed to writing clean, efficient code and staying current with emerging technologies and best practices 
  in web development.`,
  
  // Información de contacto
  contact: {
    email: 'luisdavidtrejofuentes@gmail.com',
    emailDisplay: 'luisdavidtrejofuentes@gmail.com',
    
    // Social links
    social: {
      linkedin: {
        url: 'https://www.linkedin.com/in/luis-david-trejo-fuentes/',
        username: 'luis-david-trejo-fuentes',
        display: 'LinkedIn'
      },
      github: {
        url: 'https://github.com/LuisDavidTF',
        username: 'LuisDavidTF',
        display: 'GitHub'
      }
    },
    
    // Ubicación
    location: {
      city: 'Tulancingo',
      state: 'Hidalgo',
      country: 'México',
      display: 'Tulancingo, Hidalgo, MX',
      timezone: 'America/Mexico_City'
    }
  },
  
  // Estado profesional
  status: {
    available: true,
    seekingOpportunities: true,
    openToRemote: true,
    openToRelocate: false,
    currentlyLearning: ['React', 'Architecture Patterns', 'Advanced JavaScript'],
    nextGoals: ['AWS Certification', 'TypeScript Mastery', 'Testing Frameworks']
  }
};

// ==========================================
// NAVEGACIÓN DEL HERO
// ==========================================

export const heroNavigation = [
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects',
    icon: 'fas fa-code',
    description: 'View my latest work'
  },
  {
    id: 'skills',
    label: 'Skills',
    href: '#skills', 
    icon: 'fas fa-tools',
    description: 'Technologies I work with'
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    icon: 'fas fa-envelope',
    description: 'Get in touch'
  },
  {
    id: 'documentation',
    label: 'Docs',
    href: '/documentation',
    icon: 'fas fa-book',
    description: 'Project documentation',
    isNew: true // Badge "new" para destacar nueva funcionalidad
  }
];

// ==========================================
// ACHIEVEMENTS & HIGHLIGHTS
// ==========================================

export const achievements = [
  {
    id: 'velonia-project',
    title: 'Built Complete E-commerce Platform',
    description: 'Developed Velonia from concept to deployment with 15,000+ lines of code',
    icon: 'fas fa-shopping-cart',
    date: '2024-01',
    featured: true
  },
  {
    id: 'payment-integration',
    title: 'Integrated Secure Payments',
    description: 'Successfully implemented Stripe payment system with webhook validation',
    icon: 'fas fa-credit-card',
    date: '2023-12',
    featured: true
  },
  {
    id: 'architecture-migration',
    title: 'Architectural Innovation',
    description: 'Migrated portfolio to Screaming Architecture for better maintainability',
    icon: 'fas fa-sitemap',
    date: '2024-02',
    featured: false
  }
];

// ==========================================
// EDUCATION & EXPERIENCE
// ==========================================

export const background = {
  education: [
    {
      degree: 'Software Development',
      institution: 'Self-taught & Online Courses',
      period: '2022 - Present',
      status: 'ongoing',
      focus: ['Web Development', 'Full Stack', 'Modern Frameworks']
    }
  ],
  
  experience: [
    {
      role: 'Full Stack Developer',
      type: 'personal_project',
      project: 'Velonia E-commerce Platform',
      period: '2023 - 2024',
      technologies: ['Angular', 'Node.js', 'Express', 'MySQL', 'Stripe'],
      achievements: [
        'Built complete e-commerce solution from scratch',
        'Implemented secure payment processing',
        'Created responsive admin dashboard',
        'Managed inventory and user systems'
      ]
    }
  ]
};

// ==========================================
// PERSONALITY & VALUES
// ==========================================

export const personality = {
  values: [
    'Clean, maintainable code',
    'User-centered design',
    'Continuous learning', 
    'Problem-solving mindset',
    'Attention to detail'
  ],
  
  workingStyle: [
    'Agile methodologies',
    'Test-driven approach',
    'Documentation-first',
    'Collaborative teamwork',
    'Iterative improvement'
  ],
  
  interests: [
    'Modern web technologies',
    'Software architecture',
    'UI/UX design',
    'Performance optimization',
    'Developer tools'
  ]
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Obtiene información personal básica
 * @returns {Object} Información básica
 */
export const getBasicInfo = () => ({
  fullName: personalInfo.fullName,
  currentTitle: personalInfo.currentTitle,
  tagline: personalInfo.tagline,
  email: personalInfo.contact.email
});

/**
 * Obtiene biografía según longitud requerida
 * @param {string} length - 'short', 'medium', 'long'
 * @returns {string} Biografía correspondiente
 */
export const getBio = (length = 'medium') => {
  const bios = {
    short: personalInfo.shortBio,
    medium: personalInfo.mediumBio,
    long: personalInfo.longBio
  };
  
  return bios[length] || bios.medium;
};

/**
 * Obtiene información de contacto completa
 * @returns {Object} Información de contacto
 */
export const getContactInfo = () => personalInfo.contact;

/**
 * Obtiene links sociales
 * @returns {Object} Links sociales
 */
export const getSocialLinks = () => personalInfo.contact.social;

/**
 * Obtiene navegación del hero
 * @param {boolean} includeNew - Incluir elementos marcados como "new"
 * @returns {Array} Array de elementos de navegación
 */
export const getHeroNavigation = (includeNew = true) => {
  if (includeNew) return heroNavigation;
  return heroNavigation.filter(item => !item.isNew);
};

/**
 * Obtiene achievements destacados
 * @param {boolean} onlyFeatured - Solo achievements destacados
 * @returns {Array} Array de achievements
 */
export const getAchievements = (onlyFeatured = false) => {
  if (onlyFeatured) return achievements.filter(achievement => achievement.featured);
  return achievements;
};

/**
 * Obtiene estado actual de disponibilidad
 * @returns {Object} Estado de disponibilidad
 */
export const getAvailabilityStatus = () => personalInfo.status;

/**
 * Genera título dinámico basado en contexto
 * @param {string} context - Contexto: 'hero', 'navbar', 'footer', 'meta'
 * @returns {string} Título apropiado para el contexto
 */
export const getContextualTitle = (context = 'hero') => {
  const titles = {
    hero: personalInfo.currentTitle,
    navbar: `${personalInfo.firstName} - Portfolio`,
    footer: personalInfo.fullName,
    meta: `${personalInfo.fullName} | ${personalInfo.currentTitle}`,
    short: personalInfo.firstName
  };
  
  return titles[context] || titles.hero;
};

/**
 * Obtiene información para metadata SEO
 * @returns {Object} Metadata para SEO
 */
export const getSEOMetadata = () => ({
  title: getContextualTitle('meta'),
  description: personalInfo.mediumBio,
  author: personalInfo.fullName,
  keywords: [
    'Full Stack Developer',
    'Angular Developer', 
    'Node.js',
    'React',
    'Web Development',
    'JavaScript',
    'TypeScript',
    personalInfo.firstName,
    personalInfo.lastName
  ].join(', '),
  url: 'https://luisdavidtf.github.io/Portfolio/',
  image: 'https://luisdavidtf.github.io/Portfolio/og-image.png' // placeholder
});

// ==========================================
// CONFIGURACIÓN DE DISPLAY
// ==========================================

export const displayConfig = {
  hero: {
    showFullName: true,
    showTagline: true,
    showBio: true,
    bioLength: 'medium',
    showNavigation: true,
    showAvailabilityStatus: false,
    animateText: true
  },
  
  navbar: {
    useShortName: true,
    showTitle: false
  },
  
  footer: {
    showFullName: true,
    showSocialLinks: true,
    showEmail: true
  }
};