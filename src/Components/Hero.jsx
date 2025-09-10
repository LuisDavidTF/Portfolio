export default function Hero() {
  return (
    <header className="hero text-center">
      <h1 className="display-4 fw-bold">Luis David Trejo Fuentes</h1>
      <p className="lead">Full Stack Developer in Training</p>
      <p className="tagline">Building scalable web solutions with modern technologies.</p>

      {/* Mini About Card */}
      <div className="hero-about-card mt-4">
        <p>
          Full Stack developer in training with experience in Angular, Node.js, Express,
          Stripe, and MySQL. Led the development of Velonia, an e-commerce platform with
          inventory management and secure payment integration.
        </p>
      </div>

      {/* Hero Buttons */}
      <div className="hero-buttons mt-4">
        <a href="#projects" className="btn-hero">Projects</a>
        <a href="#skills" className="btn-hero">Skills</a>
        <a href="#contact" className="btn-hero">Contact</a>
      </div>
    </header>
  );
}
