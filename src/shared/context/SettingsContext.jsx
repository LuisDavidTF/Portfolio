import { create } from 'zustand';

export const translations = {
    es: {
        common: {
            name: 'Luis David Trejo Fuentes',
            firstName: 'Luis David',
            available: 'Disponible para oportunidades',
            new: 'NUEVO'
        },
        hero: {
            greeting: 'Hola, soy',
            title: 'Full Stack Developer',
            tagline: 'Construyendo soluciones web escalables con tecnologías modernas.',
            shortTagline: 'Creador de soluciones web modernas',
            ctaProjects: 'Ver Proyectos',
            ctaContact: 'Contactar'
        },
        nav: {
            home: 'Inicio',
            projects: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto',
            docs: 'Documentación',
            preferences: 'Preferencias',
            resources: 'Recursos',
            downloadCV: 'Descargar CV',
            theme: 'Tema',
            language: 'Idioma',
            light: 'Claro',
            dark: 'Oscuro',
            system: 'Sistema'
        },
        about: {
            title: 'Perfil Profesional',
            shortBio: 'Ingeniero de Software con enfoque en Backend y orquestación BFF. Experto en Java/Spring Boot y arquitecturas escalables.',
            mediumBio: 'Ingeniero de Software experto en Backend (Java/Spring Boot) y orquestación BFF. Especialista en diseñar arquitecturas escalables, seguridad OWASP y optimización de APIs para microservicios complejos.',
            longBio: 'Ingeniero de Software con una sólida base en Backend (Java/Spring Boot) y experiencia avanzada en la construcción de capas de orquestación Backend for Frontend (BFF).\n\nEspecialista en diseñar arquitecturas escalables que conectan microservicios complejos con experiencias de usuario fluidas. Experto en seguridad (OWASP), optimización de APIs REST y desarrollo de PWAs de alto rendimiento. Apasionado por traducir necesidades de negocio en soluciones técnicas elegantes, robustas y seguras.'
        },
        projects: {
            title: 'Experiencia & Proyectos',
            viewMore: 'Detalles técnicos',
            liveDemo: 'Demo en vivo',
            githubRepo: 'Repositorio',
            techStack: 'Stack Tecnológico'
        },
        skills: {
            title: 'Habilidades Técnicas',
            'core & backend': 'Core & Backend',
            'bff & frontend': 'BFF & Frontend',
            'security': 'Seguridad',
            'data & devops': 'Datos & DevOps'
        },
        settings: {
            title: 'Configuración',
            appearance: 'Apariencia',
            language: 'Idioma',
            save: 'Guardar'
        },
        achievements: {
            title: 'Impacto & Resultados',
            velonia: {
                title: 'Arquitectura E-commerce Escalable',
                desc: 'Diseñé una API robusta en Node.js gestionando lógica compleja de inventarios y pagos seguros con Stripe.'
            },
            cacomi_perf: {
                title: 'Optimización de Infraestructura',
                desc: 'Reduje el consumo de memoria en un 32% mediante compilación nativa con GraalVM y Java 25.'
            },
            ai_integration: {
                title: 'Automatización con IA Gen',
                desc: 'Integré Google Gemini para automatizar el 100% del procesamiento de datos, reduciendo el esfuerzo manual en un 85%.'
            }
        },
        background: {
            education: {
                title: 'Formación Académica',
                degree: 'Ingeniería en Sistemas Computacionales',
                institution: 'I.T.S. de Huauchinango',
                period: '2021 - 2025',
                focus: ['Arquitectura de Software', 'Desarrollo Backend', 'Sistemas Distribuidos']
            },
            experience: {
                title: 'Trayectoria Profesional',
                role: 'Lead BFF Engineer & Co-Founder',
                project: 'Cacomi - Smart Planning Platform',
                period: '2025 - Presente',
                tasks: [
                    'Orquestación de microservicios con Astro 6 y Java 25',
                    'Mitigación proactiva de vulnerabilidades OWASP (XSS/CSRF)',
                    'Optimización de base de datos PostgreSQL (Hibernate Vector) en un 40%',
                    'Implementación de PWAs offline-first con sincronización avanzada'
                ]
            }
        },
        personality: {
            values: {
                title: 'Valores',
                items: ['Código limpio y mantenible', 'Diseño centrado en el usuario', 'Aprendizaje continuo', 'Mentalidad de resolución de problemas', 'Atención al detalle']
            },
            style: {
                title: 'Estilo de Trabajo',
                items: ['Metodologías Ágiles', 'Enfoque orientado a pruebas', 'Documentación primero', 'Trabajo colaborativo', 'Mejora iterativa']
            }
        }
    },
    en: {
        common: {
            name: 'Luis David Trejo Fuentes',
            firstName: 'Luis David',
            available: 'Available for opportunities',
            new: 'NEW'
        },
        hero: {
            greeting: "Hi, I'm",
            title: 'Software Engineer | Backend & BFF Specialist',
            tagline: 'Designing scalable architectures and high-performance orchestration layers.',
            shortTagline: 'Software Engineer & BFF Architect',
            ctaProjects: 'View Projects',
            ctaContact: 'Get in Touch'
        },
        nav: {
            home: 'Home',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
            docs: 'Docs',
            preferences: 'Preferences',
            resources: 'Resources',
            downloadCV: 'Download CV',
            theme: 'Theme',
            language: 'Language',
            light: 'Light',
            dark: 'Dark',
            system: 'System'
        },
        about: {
            title: 'Professional Profile',
            shortBio: 'Software Engineer focused on Backend and BFF orchestration. Expert in Java/Spring Boot and scalable architectures.',
            mediumBio: 'Software Engineer expert in Backend (Java/Spring Boot) and BFF orchestration. Specialist in designing scalable architectures, OWASP security, and API optimization for complex microservices.',
            longBio: 'Software Engineer with a solid foundation in Backend (Java/Spring Boot) and advanced experience in building Backend for Frontend (BFF) orchestration layers.\n\nSpecialist in designing scalable architectures that connect complex microservices with fluid user experiences. Expert in security (OWASP), REST API optimization, and high-performance PWA development. Passionate about translating business needs into elegant, robust, and secure technical solutions.'
        },
        projects: {
            title: 'Experience & Projects',
            viewMore: 'Technical details',
            liveDemo: 'Live Demo',
            githubRepo: 'Repository',
            techStack: 'Tech Stack'
        },
        skills: {
            title: 'Technical Skills',
            'core & backend': 'Core & Backend',
            'bff & frontend': 'BFF & Frontend',
            'security': 'Security',
            'data & devops': 'Data & DevOps'
        },
        settings: {
            title: 'Settings',
            appearance: 'Appearance',
            language: 'Language',
            save: 'Save'
        },
        achievements: {
            title: 'Impact & Results',
            velonia: {
                title: 'Scalable E-commerce Architecture',
                desc: 'Designed a robust Node.js API managing complex inventory logic and secure Stripe payments.'
            },
            cacomi_perf: {
                title: 'Infrastructure Optimization',
                desc: 'Reduced cloud memory consumption by 32% using native compilation with GraalVM and Java 25.'
            },
            ai_integration: {
                title: 'Gen AI Automation',
                desc: 'Integrated Google Gemini to automate 100% of data processing, reducing manual effort by 85%.'
            }
        },
        background: {
            education: {
                title: 'Academic Background',
                degree: 'Computer Systems Engineering',
                institution: 'I.T.S. de Huauchinango',
                period: '2021 - 2025',
                focus: ['Software Architecture', 'Backend Development', 'Distributed Systems']
            },
            experience: {
                title: 'Professional Journey',
                role: 'Lead BFF Engineer & Co-Founder',
                project: 'Cacomi - Smart Planning Platform',
                period: '2025 - Present',
                tasks: [
                    'Microservices orchestration with Astro 6 and Java 25',
                    'Proactive mitigation of OWASP vulnerabilities (XSS/CSRF)',
                    'PostgreSQL database optimization (Hibernate Vector) by 40%',
                    'Offline-first PWA implementation with advanced synchronization'
                ]
            }
        },
        personality: {
            values: {
                title: 'Values',
                items: ['Clean, maintainable code', 'User-centered design', 'Continuous learning', 'Problem-solving mindset', 'Attention to detail']
            },
            style: {
                title: 'Working Style',
                items: ['Agile methodologies', 'Test-driven approach', 'Documentation-first', 'Collaborative teamwork', 'Iterative improvement']
            }
        }
    }
};

const applyTheme = (t) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const isDark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    // Also set on body for legacy compatibility if needed
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
};

export const useSettings = create((set, get) => ({
    theme: typeof window !== 'undefined' ? localStorage.getItem('theme') || 'system' : 'system',
    language: typeof window !== 'undefined' ? localStorage.getItem('language')?.toLowerCase() || 'es' : 'es',
    t: translations[typeof window !== 'undefined' ? localStorage.getItem('language')?.toLowerCase() || 'es' : 'es'],

    setTheme: (newTheme) => {
        set({ theme: newTheme });
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newTheme);
            document.cookie = `theme=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
            applyTheme(newTheme);
        }
    },

    setLanguage: (lang) => {
        const normalizedLang = lang.toLowerCase();
        set({ language: normalizedLang, t: translations[normalizedLang] || translations.es });
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', normalizedLang);
            document.cookie = `language=${normalizedLang}; path=/; max-age=31536000; SameSite=Lax`;
            document.documentElement.lang = normalizedLang;
        }
    },

    init: () => {
        const { theme, language } = get();
        applyTheme(theme);
        document.documentElement.lang = language;
    }
}));
