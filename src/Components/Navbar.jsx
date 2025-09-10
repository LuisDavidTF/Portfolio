export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="https://luisdavidtf.github.io/Portfolio/">
          <i className="bi bi-house-door-fill"></i>
          <span>Portfolio</span>
        </a>

        {/* Hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        {/* Puedes descomentar para añadir más links */}
        {/* 
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item">
              <a className="custom-btn-nav" href="https://luisdavidtf.github.io/Velonia-Angular">
                <i className="bi bi-bag-heart-fill"></i> Velonia
              </a>
            </li>
          </ul>
        </div>
        */}
      </div>
    </nav>
  );
}
