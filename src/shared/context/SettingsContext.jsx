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
    language: typeof window !== 'undefined' ? localStorage.getItem('language')?.toLowerCase() || 'en' : 'en',
    t: translations[typeof window !== 'undefined' ? localStorage.getItem('language')?.toLowerCase() || 'en' : 'en'],

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
