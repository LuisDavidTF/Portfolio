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
    diagram: "./src/assets/images/projects/smart-recipe/db-schema.svg"
  },

  architecture: {
    diagram: "./src/assets/images/projects/smart-recipe/architecture-diagram2.svg"
  },

  features: [
    {
      id: 1,
      title: "Secure Authentication",
      description: "Sign up, login, and access control with JWT.",
      image:"./src/assets/images/projects/smart-recipe/Img-Auth.png",
      size: "square"
    },
    {
      id: 2,
      title: "Product Management",
      description: "Create, edit, and organize products and variants.",
      image:"./src/assets/images/projects/smart-recipe/feed.png",
      size: "square"
    },
    {
      id: 3,
      title: "Interactive Cart",
      description: "Add products and validate stock in real time.",
      image:"./src/assets/images/projects/smart-recipe/edit-delete.png",
      size: "square"
    },
    {
      id: 4,
      title: "Stripe Payments",
      description: "Secure and reliable transactions.",
      image:"./src/assets/images/projects/smart-recipe/gen-magic.png",
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
