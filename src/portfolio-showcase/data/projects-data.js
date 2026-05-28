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
    id: 'cacomi',
    name: 'Cacomi',
    tagline: 'AI-Powered Culinary Intelligence & BFF Orchestration',
    description: 'End-to-End meal planning ecosystem. Built with a high-performance Java 25 & Spring Boot core, orchestrated by an Astro BFF proxy, and delivered as an offline-first PWA.',
    longDescription: `
        Cacomi is a production-grade, end-to-end culinary intelligence platform. 
        The core transactional backend is engineered with Java 25, Spring Boot 4, and compiled via GraalVM Native Image for sub-millisecond cloud starts. 
        To ensure bank-grade security and optimal mobile performance, it utilizes a Backend-for-Frontend (BFF) architecture built with Astro 6 and React 19. 
        This ecosystem seamlessly integrates Google Gemini AI, PostgreSQL, and an offline-first PWA powered by IndexedDB.
      `,
    
    category: projectCategories.WEB_APP,
    status: projectStatus.COMPLETED,
    
    techStack: [
      'java',
      'spring-boot',
      'postgresql',
      'astro',
      'react',
      'tailwind',
      'zustand',
      'bff-proxy',
      'jwt',
      'owasp',
      'google-genai'
    ],
    
    liveUrl: 'https://cacomi.app',
    githubUrl: 'https://github.com/LuisDavidTF/smart-recipe-planner',
    documentationUrl: '#/docs/cacomi',
    
    image: '/Portfolio/images/projects/cacomi/upscalemedia-transformed.png',
    
    startDate: '2025-09-10',
    completionDate: '2026-05-01',
    featured: true,
    priority: 1,
    
    keyFeatures: [
      'BFF Secure Proxy for microservices orchestration',
      'Offline-First Experience with Dexie.js and Service Workers',
      'AI Recipe Orchestration using Vercel AI SDK and Gemini',
      'Smart Inventory Sync with semantic item unification',
      'Manual registration + Google sign-in (OAuth 2.0)',
      'User profile customization and management',
      'PWA mobile-optimized interface'
    ],
      
      challenges: [
        {
          problem: 'High memory consumption and slow cold starts in traditional cloud deployments',
          solution: 'Engineered the backend core with Java 25 and GraalVM Native Image, reducing memory footprint by 32%'
        },
        {
          problem: 'Managing complex microservices communication securely for mobile clients',
          solution: 'Implemented an Astro-based Backend-for-Frontend (BFF) layer to centralize authentication and sanitize payloads'
        },
        {
          problem: 'Ensuring seamless UX during network drops in supermarkets',
          solution: 'Developed an offline-first PWA architecture using IndexedDB (Dexie.js) and custom Service Workers'
        }
      ],
      
      stats: {
        linesOfCode: '25000+',
        commits: '120+',
        developmentHours: '450+',
        features: 12
      }
  },
  {
    id: 'velonia',
    name: 'Velonia',
    tagline: 'E-commerce platform with full inventory management',
    description: 'Scalable e-commerce platform with inventory tracking and secure Stripe payments. Built with Node.js/Express backend and Angular frontend.',
    longDescription: `
        Velonia is a robust e-commerce solution designed for scalability and security. 
        The project involved designing a complex backend API in Node.js/Express to handle inventory lifecycles and secure transaction flows.
        It features a normalized MySQL database design ensuring ACID compliance and high-performance queries.
      `,
    
    category: projectCategories.ECOMMERCE,
    status: projectStatus.COMPLETED,
    
    techStack: ['nodejs', 'express', 'mysql', 'stripe', 'angular', 'jwt', 'restapi'],
    
    liveUrl: '',
    githubUrl: 'https://github.com/LuisDavidTF/Velonia-Angular',
    documentationUrl: '#/docs/velonia',
    
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
    
    startDate: '2023-08-01',
    completionDate: '2024-01-15',
    featured: true,
    priority: 3,
    
    keyFeatures: [
      'Full product catalog with variants and categories',
      'Secure user authentication and authorization', 
      'Stripe payment integration',
      'Inventory management system',
      'Admin dashboard with analytics',
      'RESTful API architecture'
    ],
    
    challenges: [
      {
        problem: 'Complex business logic for inventory and order lifecycles',
        solution: 'Designed a normalized MySQL schema and solid API contracts to handle state transitions'
      },
      {
        problem: 'Secure payment processing',
        solution: 'Integrated Stripe API with proper error handling and webhook validation'
      }
    ],
    
    stats: {
      linesOfCode: '15000+',
      commits: '150+',
      developmentHours: '300+',
      features: 8
    }
  },
  {
    id: 'markdify',
    name: 'Markdify',
    tagline: '100% Client-Side Markdown Editor & High-Fidelity PDF Compiler',
    description: 'Privacy-first Markdown editor and GFM compiler. Generates high-fidelity vector PDFs local in browser RAM via html2pdf, DOMPurify, and debounced localStorage.',
    longDescription: `
        Markdify is a premium open-source web utility that delivers real-time GFM previewing integrated with secure, client-side vector-based PDF compilation (ISO 32000 standard).
        By running entirely inside the browser's sandbox RAM using DOMPurify and html2canvas/jsPDF, Markdify ensures military-grade privacy (zero server uploads) while delivering high-fidelity ATS-ready resumes and technical reports.
      `,
    
    category: projectCategories.WEB_APP,
    status: projectStatus.COMPLETED,
    
    techStack: [
      'nodejs',
      'typescript',
      'react',
      'tailwind',
      'owasp',
      'git',
      'github-actions'
    ],
    
    liveUrl: 'https://markdify.tech',
    githubUrl: 'https://github.com/LuisDavidTF/markdify',
    documentationUrl: '#/docs/markdify',
    
    image: '/Portfolio/images/projects/markdify/og-image.png',
    
    startDate: '2026-05-15',
    completionDate: '2026-05-27',
    featured: true,
    priority: 2,
    
    keyFeatures: [
      'Zero-Server Architecture ensures absolute GDPR-compliant privacy',
      'Real-Time GFM (GitHub Flavored Markdown) live rendering engine',
      'High-Fidelity PDF compiler with fixed Carta/A4 page-break alignments',
      'Debounced autosave synchronization with LocalStorage',
      'Rigorous XSS sanitization utilizing isolated DOM tree-based DOMPurify',
      'HTML5 File API integration for completely offline document imports',
      'Custom premium dark and light theme adaptivity using HSL variables'
    ],
    
    challenges: [
      {
        problem: 'Confidential corporate files are exposed to data leaks when uploaded to remote conversion SaaS platforms',
        solution: 'Built a 100% serverless, client-side compiler executing entirely in local browser RAM, allowing secure offline operations'
      },
      {
        problem: 'Active HTML scripts embedded in raw Markdown could compromise browser security (Cross-Site Scripting)',
        solution: 'Implemented DOMPurify to parse the compiled HTML into a virtual DOM tree, sanitizing nodes and attributes prior to UI rendering'
      },
      {
        problem: 'Stuttering or UI freezing during continuous text inputs in real-time autoguardado',
        solution: 'Developed a debounced LocalStorage save pipeline that waits for an active 800ms idle state before writing to the database'
      }
    ],
    
    stats: {
      linesOfCode: '5000+',
      commits: '40+',
      developmentHours: '60+',
      features: 8
    }
  }
];

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

export const getAllProjects = () => projectsData;

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

export const getProjectsByCategory = (category) => {
  return projectsData.filter(project => project.category === category);
};

export const getProjectsByStatus = (status) => {
  return projectsData.filter(project => project.status === status);
};

export const getProjectById = (projectId) => {
  return projectsData.find(project => project.id === projectId) || null;
};

export const getProjectsByPriority = () => {
  return [...projectsData].sort((a, b) => a.priority - b.priority);
};

export const getProjectsBySkill = (skillId) => {
  return projectsData.filter(project => 
    project.techStack.includes(skillId)
  );
};

export const getProjectSkills = (projectId) => {
  const project = getProjectById(projectId);
  if (!project) return [];
  return getSkillsByIds(project.techStack);
};

export const projectsDisplayConfig = {
  maxProjectsToShow: 6,
  showInProgress: true,
  sortByPriority: true,
  showTechStack: true,
  showStatusBadges: false,
  truncateDescription: true,
  maxDescriptionLength: 150,
  imageAspectRatio: '16:9',
  enableImageLazyLoading: true
};

export const statusLabels = {
  [projectStatus.COMPLETED]: 'Completed',
  [projectStatus.IN_PROGRESS]: 'In Progress', 
  [projectStatus.PLANNING]: 'Planning',
  [projectStatus.MAINTENANCE]: 'Maintenance'
};

export const statusIcons = {
  [projectStatus.COMPLETED]: 'fas fa-check',
  [projectStatus.IN_PROGRESS]: 'fas fa-hourglass-half', 
  [projectStatus.PLANNING]: 'fas fa-calendar',
  [projectStatus.MAINTENANCE]: 'fas fa-wrench'
};

export const statusColors = {
  [projectStatus.COMPLETED]: '#22c55e', // green
  [projectStatus.IN_PROGRESS]: '#f59e0b', // amber
  [projectStatus.PLANNING]: '#6b7280', // gray
  [projectStatus.MAINTENANCE]: '#3b82f6' // blue
};
