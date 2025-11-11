import { version } from 'react';
import { getSkillsByIds } from '../../skills-demonstration/data/skills-data.js';


const SmartRecipePlannerDocs = {
  id: "smartRecipePlanner",
  version: "0.1.0",
  title: "CulinaSmart Documentation",
  tagline: "AI-powered meal plans from your pantry",

  overview: {
    description: `
      Smart Recipe Planner is a menu planning app with integrated AI 
      to suggest recipes to include in your weekly meal plan based on 
      your nutritional goals and the ingredients you have at home.
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
      title: "Secure Authentication",
      description: "Sign up, login, and access control with JWT.",
      image:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/smart-recipe/Img-Auth.png?raw=true",
      size: "square"
    },
    {
      id: 2,
      title: "Feed with Infinite Scroll",
      description: "Infinitely scrolling news page.",
      image:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/smart-recipe/feed.png?raw=true",
      size: "square"
    },
    {
      id: 3,
      title: "Interactive Cart",
      description: "Edit and delete recipes with authentication.",
      image:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/smart-recipe/edit-delete.png?raw=true",
      size: "square"
    },
    {
      id: 4,
      title: "AI-Powered Recipe Generation",
      description: "Generate recipes based on word prompts using Google GenAI.",
      image:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/smart-recipe/gen-magic.png?raw=true",
      size: "square"
    }
  ],

  roadmap: [
    "Add profile sections for users to manage their information.",
    "Add ingredient inventory management.",
    "Add profile management features.",
    "Add ingredient-based recipe suggestions using AI.",
    "Implement weekly meal planning features.",
    "Integrate grocery list generation from meal plans.",
    "Enhance nutritional tracking and goal setting.",
    "Develop mobile app version for on-the-go access."
  ],

  credits: {
    author: "Luis David Trejo Fuentes",
    collaborators: [],
    repo: "https://github.com/LuisDavidTF/Smart-Recipe-Planner",
    repoApi:"https://github.com/LuisDavidTF/Smart-Recipe-Planner-API",
  },

  deployedURL: "https://smart-recipe-planner.vercel.app/"
};

export default SmartRecipePlannerDocs;
