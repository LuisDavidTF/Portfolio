const MarkdifyDocs = {
  id: "markdify",
  version: "1.0.0",
  title: "Markdify — Markdown to PDF Pro",
  tagline: "100% Client-Side Markdown Editor & High-Fidelity PDF Compiler",
  overview: {
    image: "/Portfolio/images/projects/markdify/logo.png",
    description: `
      Markdify is a premium open-source web application designed to deliver real-time GitHub Flavored Markdown (GFM) rendering integrated with secure, client-side vector-based PDF compilation (ISO 32000 standard).
      By running entirely inside the browser's sandbox RAM utilizing DOMPurify and html2canvas/jsPDF, Markdify ensures military-grade privacy (zero server uploads) while delivering high-fidelity ATS-ready resumes and professional technical reports.
      This utility is built entirely with Vanilla CSS (HSL variables) and lightweight Vanilla JS to ensure maximum performance, instant load times, and complete offline capability.
    `,
    images: [
      { link: "/Portfolio/images/projects/markdify/og-image.png", description: "Markdify Live Workspace & Dynamic Multi-Page Compiler", icon: "fas fa-desktop" }
    ]
  },
  database: {
    diagram: "" // No database backend
  },
  architecture: {
    diagram: "" // Simple client-side app
  },
  features: [
    {
      id: 1,
      title: "Zero-Server Privacy Guarantee",
      description: "Operates 100% client-side. Your confidential corporate drafts and resumes are compiled entirely in your browser's local RAM. Absolutely no data is transmitted to remote servers, ensuring strict GDPR/CCPA compliance.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      size: "square"
    },
    {
      id: 2,
      title: "Real-Time GFM Rendering Engine",
      description: "Features a live-updating split-panel workspace with a high-fidelity Markdown parser based on Marked.js, supporting full GitHub Flavored Markdown (GFM) extensions, interactive checklists, dynamic code highlight, and physical key maps.",
      image: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=800&q=80",
      size: "square"
    },
    {
      id: 3,
      title: "Isolated XSS Sanitization Pipeline",
      description: "Neutralizes security exploits by parsing compiled HTML into an isolated, inert virtual DOM tree. Powered by DOMPurify, it dynamically inspects and sanitizes malicious nodes and inline event triggers before rendering to the page.",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff270190?auto=format&fit=crop&w=800&q=80",
      size: "square"
    },
    {
      id: 4,
      title: "Fixed-Scale Vector PDF Compiling",
      description: "Translates HTML5 nodes into clean physical dimensions (A4/Carta) dynamically scaled at 2x pixel density. Fixes structural elements and pagination, supporting custom HTML page breaks without layout distortion.",
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
      size: "square"
    },
    {
      id: 5,
      title: "Debounced Local Autosave Flow",
      description: "Includes an automated local state persistence engine backed by browser Web Storage. Leverages debouncing algorithms to delay write sequences for 800ms during active input, avoiding rendering micro-stuttering.",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
      size: "square"
    },
    {
      id: 6,
      title: "Offline-First File API Integrations",
      description: "Allows loading of local `.md` or `.txt` drafts instantly using browser File API and FileReader objects. Reads the binary text stream securely in local memory, enabling complete offline functionality.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
      size: "square"
    }
  ],
  roadmap: [
    "Monetization optimization with Google AdSense indexing and dynamic ad placement slots",
    "Rich-text PDF vectors export with native systems fonts embedding using advanced jsPDF extensions",
    "Expansion of the tools dashboard with additional local utilities (JSON formatter, Base64 encoder, Image optimizer)",
    "Global collaborative open-source feature contributions via the MIT Licensed GitHub repository"
  ],
  credits: {
    author: "Luis David Trejo Fuentes",
    collaborators: [],
    repo: "https://github.com/LuisDavidTF/markdify"
  },
  deployedURL: "https://markdify.tech"
};
export default MarkdifyDocs;
