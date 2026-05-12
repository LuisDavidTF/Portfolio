export const skillCategories = {
  CORE_BACKEND: 'Core & Backend',
  BFF_FRONTEND: 'BFF & Frontend',
  SECURITY: 'Security',
  DATA_DEVOPS: 'Data & DevOps'
};

// ==========================================
// SKILLS DATA BY CATEGORY
// ==========================================

export const skillsData = {
  [skillCategories.CORE_BACKEND]: [
    {
      id: 'java',
      name: 'Java 21-25',
      icon: 'fab fa-java',
      level: 'advanced',
      experience: '2+ years',
      color: '#f89820',
      textColor: '#fff',
      featured: true
    },
    {
      id: 'spring-boot',
      name: 'Spring Boot 4',
      icon: 'fas fa-leaf',
      level: 'advanced',
      experience: '2+ years',
      color: '#6DB33F',
      textColor: '#fff',
      featured: true
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      icon: 'fab fa-node',
      level: 'advanced',
      experience: '2+ years',
      color: '#339933',
      textColor: '#fff'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: 'fas fa-code',
      level: 'advanced',
      experience: '2+ years',
      color: '#007ACC',
      textColor: '#fff'
    },
    {
      id: 'restapi',
      name: 'RESTful APIs',
      icon: 'fas fa-network-wired',
      level: 'advanced',
      experience: '3+ years',
      color: '#00AEEF',
      textColor: '#fff'
    },
    {
      id: 'microservices',
      name: 'Microservices',
      icon: 'fas fa-cubes',
      level: 'intermediate',
      experience: '1+ year',
      color: '#6c757d',
      textColor: '#fff'
    }
  ],

  [skillCategories.BFF_FRONTEND]: [
    {
      id: 'astro',
      name: 'Astro 6',
      icon: 'fas fa-rocket',
      level: 'advanced',
      experience: '1 year',
      color: '#FF5D01',
      textColor: '#fff',
      featured: true
    },
    {
      id: 'react',
      name: 'React 19',
      icon: 'fab fa-react',
      level: 'advanced',
      experience: '2+ years',
      color: '#61DAFB',
      textColor: '#000',
      featured: true
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS 4',
      icon: 'fab fa-css3-alt',
      level: 'advanced',
      experience: '2+ years',
      color: '#38B2AC',
      textColor: '#fff',
      featured: true
    },
    {
      id: 'zustand',
      name: 'Zustand 5',
      icon: 'fas fa-bear',
      level: 'advanced',
      experience: '1 year',
      color: '#433929',
      textColor: '#fff',
      featured: true
    },
    {
      id: 'zod',
      name: 'Zod',
      icon: 'fas fa-check-circle',
      level: 'advanced',
      experience: '1 year',
      color: '#F43E5C',
      textColor: '#fff'
    },
    {
      id: 'angular',
      name: 'Angular',
      icon: 'fab fa-angular',
      level: 'intermediate',
      experience: '2+ years',
      color: '#DD0031',
      textColor: '#fff'
    }
  ],

  [skillCategories.SECURITY]: [
    {
      id: 'spring-security',
      name: 'Spring Security',
      icon: 'fas fa-shield-alt',
      level: 'intermediate',
      experience: '1+ year',
      color: '#6DB33F',
      textColor: '#fff'
    },
    {
      id: 'jwt',
      name: 'JWT Auth',
      icon: 'fas fa-key',
      level: 'advanced',
      experience: '1+ year',
      color: '#000',
      textColor: '#fff'
    },
    {
      id: 'owasp',
      name: 'OWASP Top 10',
      icon: 'fas fa-user-shield',
      level: 'advanced',
      experience: 'Knowledge',
      color: '#E34F26',
      textColor: '#fff',
      featured: true
    },
    {
      id: 'bff-proxy',
      name: 'BFF Proxy Pattern',
      icon: 'fas fa-server',
      level: 'advanced',
      experience: '1 year',
      color: '#336791',
      textColor: '#fff',
      featured: true
    }
  ],

  [skillCategories.DATA_DEVOPS]: [
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      icon: 'fas fa-database',
      level: 'advanced',
      experience: '2+ years',
      color: '#336791',
      textColor: '#fff',
      featured: true
    },
    {
      id: 'mysql',
      name: 'MySQL',
      icon: 'fas fa-database',
      level: 'advanced',
      experience: '2+ years',
      color: '#4479A1',
      textColor: '#fff'
    },
    {
      id: 'hibernate',
      name: 'Hibernate (JPA)',
      icon: 'fas fa-leaf',
      level: 'intermediate',
      experience: '1+ year',
      color: '#59666C',
      textColor: '#fff'
    },
    {
      id: 'docker',
      name: 'Docker',
      icon: 'fab fa-docker',
      level: 'intermediate',
      experience: '1 year',
      color: '#2496ED',
      textColor: '#fff'
    },
    {
      id: 'git',
      name: 'Git/GitHub',
      icon: 'fab fa-github',
      level: 'advanced',
      experience: '3+ years',
      color: '#171515',
      textColor: '#fff'
    },
    {
      id: 'github-actions',
      name: 'CI/CD (Actions)',
      icon: 'fas fa-infinity',
      level: 'intermediate',
      experience: '1 year',
      color: '#2088FF',
      textColor: '#fff'
    }
  ]
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

export const getAllSkills = () => skillsData;

export const getAllSkillsFlat = () => {
  return Object.values(skillsData).flat();
};

export const getFeaturedSkills = () => {
  return getAllSkillsFlat().filter(skill => skill.featured);
};

export const getSkillById = (skillId) => {
  return getAllSkillsFlat().find(skill => skill.id === skillId) || null;
};

export const getSkillsByIds = (skillIds) => {
  return skillIds.map(id => getSkillById(id)).filter(Boolean);
};

export const orderedCategories = [
  skillCategories.CORE_BACKEND,
  skillCategories.BFF_FRONTEND,
  skillCategories.SECURITY,
  skillCategories.DATA_DEVOPS
];