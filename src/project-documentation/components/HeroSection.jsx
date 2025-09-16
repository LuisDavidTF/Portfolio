export default function HeroSection ({ title, tagline, image }) {
    return(
  <div className="text-center  hero-intro animate-fade-in"
  >
    <h1 className="display-4 fw-bold mb-2 text animate-slide-down">{title}</h1>
    <p className="tagline text-secondary mb-4 animate-fade-in">{tagline}</p>
  </div>);
}

