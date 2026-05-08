const CacomiDocs = {
  id: "cacomi",
  version: "1.0.0",
  title: "Cacomi — Smart Meal Planner",
  tagline: "AI-Powered Culinary Intelligence & BFF Orchestration",
  overview: {
    description: `
      Cacomi is a production-grade, end-to-end culinary intelligence platform. 
      The core transactional backend is engineered with Java 25, Spring Boot 4, and compiled via GraalVM Native Image for sub-millisecond cloud starts. 
      To ensure bank-grade security and optimal mobile performance, it utilizes a Backend-for-Frontend (BFF) architecture built with Astro 6 and React 19. 
      This ecosystem seamlessly integrates Google Gemini AI, PostgreSQL, and an offline-first PWA powered by IndexedDB.
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
      title: "BFF Secure Proxy",
      description: "Secure orchestration layer that protects internal infrastructure and manages JWT sessions via HttpOnly cookies.",
      image: "/Portfolio/images/projects/cacomi/iPad-PRO-11-cacomi.app.png",
      size: "square"
    },
    {
      id: 2,
      title: "Offline-First Experience",
      description: "Advanced PWA with Service Workers and IndexedDB (Dexie.js) for full meal planning and shopping list access without internet.",
      image: "/Portfolio/images/projects/cacomi/iPad-PRO-11-cacomi.app_1_.png",
      size: "square"
    },
    {
      id: 3,
      title: "AI Recipe Orchestration",
      description: "Generative AI integration using Vercel AI SDK and Gemini to transform pantry inventory into personalized culinary plans.",
      image: "/Portfolio/images/projects/cacomi/iPad-PRO-11-cacomi.app_2_.png",
      size: "square"
    },
    {
      id: 4,
      title: "Smart Inventory Sync",
      description: "Real-time synchronization between pantry, recipes, and shopping lists with semantic item unification.",
      image: "/Portfolio/images/projects/cacomi/iPad-PRO-11-cacomi.app_3_.png",
      size: "square"
    }
  ],
  roadmap: [
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
