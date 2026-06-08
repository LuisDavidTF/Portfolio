const OrthosDocs = {
  id: "orthos",
  version: "1.0.0",
  title: "Orthos — 2D Room Planner",
  tagline: "Zero-Server 2D Room Planner & Interior CAD Simulator",
  overview: {
    image: "/Portfolio/images/projects/orthos/hero.png",
    description: `
      Orthos is an interactive, high-fidelity 2D room planner and interior design simulator that runs entirely client-side. 
      Built using React 19, TypeScript, Vite, and high-definition SVG vector graphics, it allows users to draft custom rooms with real-world dimensions and arrange furniture with precise measurements.
      Operating under a strict Zero-Server architecture, all geometry computations, layout scaling, and data persistence remain local to the user's browser, guaranteeing absolute privacy.
    `,
    images: [
      { link: "/Portfolio/images/projects/orthos/workspace.png", description: "Orthos Interactive SVG Canvas and Real-Time Workspace Layout", icon: "fas fa-desktop" }
    ]
  },
  database: {
    diagram: "" // No database backend
  },
  architecture: {
    diagram: "" // Client-side SVG rendering engine
  },
  features: [
    {
      id: 1,
      title: "Polygonal Room Editor",
      description: "Supports asymmetric and polygonal layouts. Users can adjust corners with magnetic grid-snapping, add new corners with split-wall controls, or double-click to remove corners, keeping a minimum structural stability of 3 walls.",
      image: "/Portfolio/images/projects/orthos/workspace.png",
      size: "square"
    },
    {
      id: 2,
      title: "Real-Time CAD Measurement Engine",
      description: "Calculates and renders measurement labels dynamically oriented to the angle of each individual wall. It handles real-time conversion between Centimeters (cm), Meters (m), Inches (in), and Feet (ft).",
      image: "/Portfolio/images/projects/orthos/custom-ui.png",
      size: "square"
    },
    {
      id: 3,
      title: "Dynamic Orthogonal Guides",
      description: "Projects intelligent, real-time distance guides from the selected furniture item to the nearest walls. This ensures users know the exact clearances and fits for physical furniture planning.",
      image: "/Portfolio/images/projects/orthos/workspace.png",
      size: "square"
    },
    {
      id: 4,
      title: "Premium Glassmorphic Component Library",
      description: "Custom UI built entirely without heavy framework design components. Features smooth glassmorphic overlays, stacked notification toast systems, custom slider rotation wheels, and iOS-styled toggles.",
      image: "/Portfolio/images/projects/orthos/grid.png",
      size: "square"
    },
    {
      id: 5,
      title: "Interactive SVG Furniture Library",
      description: "Includes detailed technical CAD blocks for beds, wardrobes, seating, tables, stairs, and architectural elements (windows and doors with opening radius). Objects support scale adjustments and custom colors.",
      image: "/Portfolio/images/projects/orthos/features.png",
      size: "square"
    },
    {
      id: 6,
      title: "Multi-Format Export & History",
      description: "Enables exporting designs as clean vector SVG files, high-resolution PNGs, or editable JSON files. Features an in-memory Undo/Redo stack with browser keyboard shortcuts (Ctrl+Z / Ctrl+Y) for flawless workflow.",
      image: "/Portfolio/images/projects/orthos/workspace.png",
      size: "square"
    }
  ],
  roadmap: [
    "3D WebGL preview generation using Three.js and custom extruded SVG polygons",
    "Predefined room templates library (standard bedrooms, kitchens, and offices)",
    "Collaborative multi-user real-time planning using WebRTC peer-to-peer connections",
    "Material library integration (wood, tile, carpet textures for floor fills)"
  ],
  credits: {
    author: "Luis David Trejo Fuentes",
    collaborators: [],
    repo: "https://github.com/LuisDavidTF/simulador"
  },
  deployedURL: "https://orthos.markdify.tech"
};
export default OrthosDocs;
