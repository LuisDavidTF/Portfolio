export const personalInfo = {
  // Información principal
  fullName: 'Luis David Trejo Fuentes',
  firstName: 'Luis David',
  lastName: 'Trejo Fuentes',
  
  // Títulos y roles
  currentTitle: 'Software Engineer | Backend & BFF Specialist',
  alternativeTitles: [
    'Backend Engineer',
    'BFF Architect',
    'Java Developer',
    'Software Engineer'
  ],
  
  // Tagline/elevator pitch
  tagline: 'Designing scalable architectures and high-performance orchestration layers.',
  shortTagline: 'Software Engineer & BFF Architect',
  
  // Biografías de diferentes longitudes
  shortBio: 'Software Engineer focused on Backend (Java/Spring Boot) and BFF orchestration.',
  
  mediumBio: `Software Engineer expert in Backend (Java/Spring Boot) and BFF orchestration. 
  Specialist in designing scalable architectures, OWASP security, and API optimization for complex microservices.`,
  
  longBio: `Software Engineer with a solid foundation in Backend (Java/Spring Boot) and advanced experience in building 
  Backend for Frontend (BFF) orchestration layers.
  
  Specialist in designing scalable architectures that connect complex microservices with fluid user experiences. 
  Expert in security (OWASP), REST API optimization, and high-performance PWA development. 
  Passionate about translating business needs into elegant, robust, and secure technical solutions.`,
  
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
    // Habilidades y tecnologías
    skills: {
      core_backend: {
        title: 'Core & Backend',
        items: ['Java 21-25', 'Spring Boot 4', 'Node.js', 'TypeScript', 'RESTful APIs', 'Microservices']
      },
      bff_frontend: {
        title: 'BFF & Frontend',
        items: ['Astro 6', 'React 19', 'Tailwind CSS 4', 'Zustand', 'Zod', 'Islands Architecture']
      },
      security: {
        title: 'Security',
        items: ['Spring Security', 'JWT', 'OWASP Top 10', 'Header Sanitization', 'BFF Proxy Pattern']
      },
      data_devops: {
        title: 'Data & DevOps',
        items: ['PostgreSQL', 'MySQL', 'Hibernate (JPA)', 'Docker', 'Git/GitHub', 'GitHub Actions', 'SEO']
      }
    },
    id: 'contact',
    label: 'Contact',
    href: '#social-links',
    icon: 'fas fa-envelope',
    description: 'Get in touch'
  }/*,
  {
    id: 'documentation',
    label: 'Docs',
    href: '#/documentation',
    icon: 'fas fa-book',
    description: 'Project documentation',
    isNew: true // Badge "new" para destacar nueva funcionalidad
  }*/
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
      id: 'itsh',
      degree: 'B.S. Computer Systems Engineering',
      institution: 'Instituto Tecnológico Superior de Huauchinango',
      location: 'Puebla, Mexico',
      period: 'Aug 2021 - Jan 2025',
      focus: ['Software Architecture', 'Backend Development', 'Distributed Systems'],
      logo: 'fas fa-graduation-cap'
    }
  ],
  experience: [
    {
      id: 'cacomi',
      role: 'Co-Founder & Lead BFF Engineer',
      company: 'Cacomi',
      location: 'Remote',
      period: 'Oct 2025 - Present',
      description: 'Smart Meal Planning Platform. Focused on high-impact nutrition and pantry management.',
      achievements: [
        'Designed transactional core in Java 25 & Spring Boot with GraalVM native compilation.',
        'Optimized database response times by 40% using PostgreSQL & Hibernate Vector.',
        'Integrated Google Gemini (Spring AI) for 100% automated nutritional data processing.',
        'Orchestrated microservices via Astro 6 BFF, reducing mobile network latency by 35%.',
        'Mitigated OWASP vulnerabilities via secure proxy and JWT HttpOnly cookies.'
      ],
      technologies: ['Java 25', 'Spring Boot', 'Astro 6', 'React 19', 'PostgreSQL', 'Zustand', 'Docker'],
      logo: 'fas fa-rocket'
    },
    {
      id: 'velonia',
      role: 'Backend Developer (Freelance)',
      company: 'Velonia E-commerce',
      location: 'Remote',
      period: 'Jan 2023 - June 2024',
      description: 'Scalable e-commerce platform with inventory and payment management.',
      achievements: [
        'Designed scalable Node.js/Express API for complex business logic.',
        'Integrated secure Stripe payment gateway.',
        'Designed normalized MySQL schemas ensuring ACID compliance.',
        'Defined robust RESTful API contracts for Angular client decoupling.'
      ],
      technologies: ['Node.js', 'Express', 'MySQL', 'Stripe', 'Angular'],
      logo: 'fas fa-shopping-cart'
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