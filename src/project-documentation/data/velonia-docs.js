import { getSkillsByIds } from '../../skills-demonstration/data/skills-data.js';


const VeloniaDocs = {
  id: "velonia",
  title: "Velonia Documentation",
  tagline: "E-commerce platform with full inventory management",

  overview: {
    description: `
      Velonia is a full-featured e-commerce solution with product management,
      user authentication, and secure payments. It includes an admin dashboard,
      analytics, and responsive design for all devices.
    `,
    images: [
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/home-nologin.jpeg?raw=true",description:"Home", icon:"d fas fa-house"},
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/register.jpeg?raw=true", description:"User Register", icon:"fas fa-clipboard"},
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/login.jpeg?raw=true", description:"User Login", icon:"fas fa-sign-in-alt"},
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/home-login.jpeg?raw=true", description:"Home when the user Logged in", icon:"fas fa-house"},
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/categorys.jpeg?raw=true", description:"Men's Category", icon:"fas fa-male"},
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/add-product.jpeg?raw=true", description:"Add a new Product", icon:"fas fa-add"},
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/add-variants.jpeg?raw=true", description:"Add a variants to the product", icon:"fas fa-add"},
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/details.jpeg?raw=true", description:"Product details", icon:"fas fa-circle-info"},
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/cart.jpeg?raw=true", description:"Cart Section", icon:"fas fa-cart-shopping"},
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/stripe.jpeg?raw=true", description:"Payment with Stripe", icon:"fas fa-credit-card"},
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/pago-sucess.jpeg?raw=true", description:"Successful payment", icon:"fas fa-check"},
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/pago-error.jpeg?raw=true", description:"Incorrect payment", icon:"fas fa-xmark"},
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/profile.jpeg?raw=true", description:"Profile Section", icon:"fas fa-user"},
      {link:"https://github.com/LuisDavidTF/Portfolio/blob/main/src/assets/images/projects/velonia/edit-profile.jpeg?raw=true", description:"Edit Profile", icon:"fas fa-user-pen"},
    ]
  },

  installation: {
    prerequisites: [
      "Node.js >= 18",
      "MySQL >= 8",
      "Angular CLI",
      "Stripe account with API keys"
    ],
    notes: [
      "Make sure you import the initial database schema from `backend/database/schema.sql` before starting."
    ],
    steps: [
      {
        title: "Clone the repository",
        description: "Download the project source code from GitHub.",
        code: `git clone https://github.com/LuisDavidTF/Velonia-Angular.git`
      },
      {
        title: "Install dependencies",
        description: "Install required packages for both frontend and backend.",
        code: `
cd VeloniaAngular
npm install

cd backend
npm install
        `
      },
      {
        title: "Set environment variables",
        description: "Create a \`.env\` file inside the backend folder with your local configuration.",
        code: `
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=velonia
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
PORT=3000
        `
      },
      {
        title: "Run the application",
        description: "Start backend and frontend servers.",
        code: `
cd backend
npm start

# In another terminal
ng serve
        `
      }
    ],
    deployment: [
      "Deploy the backend on AWS Elastic Beanstalk",
      "Use RDS for MySQL database",
      "Deploy frontend on AWS Amplify or GitHub Pages"
    ]
  },

  database: {
    diagram: "./src/assets/images/projects/velonia/db-schema.svg",
    tables: [
      { name: "Users", description: "Stores user credentials and profile information." },
      { name: "Products", description: "Product details with support for images as BLOBs." },
      { name: "Orders", description: "Links users with products, handling order history and status." }
    ]
  },

  architecture: {
    description: "Velonia follows a full-stack architecture with Angular frontend, Node.js + Express backend, and MySQL database. Stripe is integrated for payments.",
    diagram: "/assets/images/velonia/architecture.png"
  },

  features: [
    "Full product catalog with variants and categories",
    "Secure authentication and authorization",
    "Shopping cart and checkout",
    "Stripe integration with webhooks",
    "Inventory management",
    "Admin dashboard with analytics",
    "Responsive design"
  ],

  roadmap: [
    "Add internationalization (i18n)",
    "Migrate backend to TypeScript",
    "Implement automated tests with Jest",
    "Introduce recommendation system with AI"
  ],

  credits: {
    author: "Luis David Trejo Fuentes",
    collaborators: [],
    repo: "https://github.com/LuisDavidTF/Velonia-Angular",
    linkedin: "https://www.linkedin.com/in/luis-david-trejo-fuentes/",
    email: "luisdavidtrejofuentes@gmail.com"
  }
};

export default VeloniaDocs;
