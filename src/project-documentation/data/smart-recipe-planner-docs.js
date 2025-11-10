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
    images: [
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/home-nologin.jpeg?raw=true", description: "Home", icon: "d fas fa-house" },
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/register.jpeg?raw=true", description: "User Register", icon: "fas fa-clipboard" },
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/login.jpeg?raw=true", description: "User Login", icon: "fas fa-sign-in-alt" },
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/home-login.jpeg?raw=true", description: "Home when the user Logged in", icon: "fas fa-house" },
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/categorys.jpeg?raw=true", description: "Men's Category", icon: "fas fa-male" },
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/add-product.jpeg?raw=true", description: "Add a new Product", icon: "fas fa-add" },
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/add-variants.jpeg?raw=true", description: "Add a variants to the product", icon: "fas fa-add" },
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/details.jpeg?raw=true", description: "Product details", icon: "fas fa-circle-info" },
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/cart.jpeg?raw=true", description: "Cart Section", icon: "fas fa-cart-shopping" },
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/stripe.jpeg?raw=true", description: "Payment with Stripe", icon: "fas fa-credit-card" },
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/pago-sucess.jpeg?raw=true", description: "Successful payment", icon: "fas fa-check" },
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/pago-error.jpeg?raw=true", description: "Incorrect payment", icon: "fas fa-xmark" },
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/profile.jpeg?raw=true", description: "Profile Section", icon: "fas fa-user" },
      { link: "https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/edit-profile.jpeg?raw=true", description: "Edit Profile", icon: "fas fa-user-pen" },
    ]
  },
  database: {
    diagram: "./src/assets/images/projects/smart-recipe/db-schema.svg"
  },

  architecture: {
    diagram: "./src/assets/images/projects/smart-recipe/architecture-diagram.svg"
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
