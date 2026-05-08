const CacomiDocs = {
  id: "cacomi",
  version: "1.0.0",
  title: "Cacomi — Smart Meal Planner",
  tagline: "AI-Powered Culinary Intelligence & BFF Orchestration",
  overview: {
    description: `
      Cacomi is a production-grade culinary intelligence platform built to reinvent how we manage our food, time, and money. 
      The core transactional backend is engineered with Java 25 and Spring Boot, compiled via GraalVM for sub-millisecond cloud starts. 
      To guarantee bank-grade security and seamless mobile delivery, it employs a Backend-for-Frontend (BFF) proxy built with Astro 6 and React 19. 
      By combining Google Gemini AI for smart recipe orchestration, robust microservices, and an offline-first PWA, Cacomi transforms everyday ingredients into optimized daily plans.
    `,
    images: []
  },
  database: {
    diagram: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/smart-recipe/database-diagram.svg?raw=true"
  },
  architecture: {
    diagram: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/smart-recipe/architecture-diagram.svg?raw=true"
  },
  features: [
    {
      id: 1,
      title: "AI Recipe Discovery & Exploration",
      description: "Seamlessly filters and queries a vast recipe catalog. Powered by Google Gemini AI, it dynamically generates personalized meal plans based on real-time pantry inventory, ensuring zero food waste.",
      image: "/Portfolio/images/projects/cacomi/iPad-PRO-11-cacomi.app_2_.png",
      size: "square"
    },
    {
      id: 2,
      title: "Smart Planning & BFF Orchestration",
      description: "A drag-and-drop weekly planner backed by an Astro Backend-for-Frontend (BFF) proxy. The BFF securely orchestrates microservices, sanitizes payloads, and manages JWT sessions via HttpOnly cookies for bank-grade security.",
      image: "/Portfolio/images/projects/cacomi/Macbook-Air-cacomi.app.png",
      size: "square"
    },
    {
      id: 3,
      title: "Real-Time Inventory Management",
      description: "A synchronized digital pantry that tracks ingredient expiration and semantic item unification. It integrates directly with the shopping list to provide a cohesive, data-driven culinary experience.",
      image: "/Portfolio/images/projects/cacomi/iPad-PRO-11-cacomi.app_4_.png",
      size: "square"
    },
    {
      id: 4,
      title: "Dynamic Nutritional State Management",
      description: "Utilizes React 19 and Zustand 5 to manage complex, reactive UI states. Users can dynamically scale portions, instantly recalculating macro and micronutritional data without latency.",
      image: "/Portfolio/images/projects/cacomi/Macbook-Air-cacomi.app_1_.png",
      size: "square"
    },
    {
      id: 5,
      title: "Offline-First PWA Architecture",
      description: "Engineered for maximum reliability in low-connectivity environments (like supermarkets). It leverages advanced Service Workers and IndexedDB (Dexie.js) to cache data and provide full functionality offline.",
      image: "/Portfolio/images/projects/cacomi/iPad-PRO-11-cacomi.app_3_.png",
      size: "square"
    },
    {
      id: 6,
      title: "Premium UI/UX & Dark Mode",
      description: "A responsive, accessible interface styled with Tailwind CSS 4. It features a seamless dark mode and smooth micro-animations, delivering an experience that feels both modern and professional.",
      image: "/Portfolio/images/projects/cacomi/Macbook-Air-cacomi.app_2_.png",
      size: "square"
    }
  ],
  roadmap: [
    "Cacomi Tech Blog: A space to share engineering challenges, AI decisions, and system architecture updates.",
    "Implement Bank-Grade Security (RBAC & Stealth Mode)",
    "Advanced AI Discovery Loop for recipe recommendations",
    "Global I18n support (ES, EN, FR) for international markets",
    "Integrate Real-time Nutritional Telemetry with Recharts"
  ],
  credits: {
    author: "Luis David Trejo Fuentes",
    collaborators: [],
    repo: "https://github.com/LuisDavidTF/smart-recipe-planner",
    repoApi: "https://github.com/LuisDavidTF/smart-recipe-planner-api",
  },
  deployedURL: "https://cacomi.app"
};
export default CacomiDocs;
