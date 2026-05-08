const CacomiDocs = {
  id: "cacomi",
  version: "1.0.0",
  title: "Cacomi — Smart Meal Planner",
  tagline: "AI-Powered Culinary Intelligence & BFF Orchestration",
  overview: {
    description: `
      Cacomi is a high-performance meal planning platform built with Astro 6 and React 19. 
      It features a robust Backend-for-Frontend (BFF) architecture to orchestrate 
      microservices and secure sensitive data. Optimized for mobile as a PWA with 
      full offline support via IndexedDB.
    `,
    images: []
  },
  database: {
    diagram: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/smart-recipe/db-schema.svg?raw=true"
  },
  architecture: {
    diagram: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/smart-recipe/architecture-diagram2.svg?raw=true"
  },
  features: [
    {
      id: 1,
      title: "BFF Secure Proxy",
      description: "Secure orchestration layer that protects internal infrastructure and manages JWT sessions via HttpOnly cookies.",
      image: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/smart-recipe/Img-Auth.png?raw=true",
      size: "square"
    },
    {
      id: 2,
      title: "Offline-First Experience",
      description: "Advanced PWA with Service Workers and IndexedDB (Dexie.js) for full meal planning and shopping list access without internet.",
      image: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/smart-recipe/feed.png?raw=true",
      size: "square"
    },
    {
      id: 3,
      title: "AI Recipe Orchestration",
      description: "Generative AI integration using Vercel AI SDK and Gemini to transform pantry inventory into personalized culinary plans.",
      image: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/smart-recipe/gen-magic.png?raw=true",
      size: "square"
    },
    {
      id: 4,
      title: "Smart Inventory Sync",
      description: "Real-time synchronization between pantry, recipes, and shopping lists with semantic item unification.",
      image: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/smart-recipe/edit-delete.png?raw=true",
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
