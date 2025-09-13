import { useState, useEffect } from 'react';
import {
  navigationConfig,
  handleNavigation,
  getMobileMenuSection
} from '../data/navigation-links.js';
import PersonalIntro from '../../personal-branding/components/PersonalIntro.jsx';
import MobileMenu from './MobileMenu.jsx';

export default function MainNavbar({
  variant = 'default',
  showMobileMenu = true,
  enableStickyBehavior = true,
  className = ''
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // dropdowns: 'more' | 'preferences' | 'resources' | null
  const [openDropdown, setOpenDropdown] = useState(null);

  // Detectar tema actual al inicio
  const getInitialTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    if (document.body.getAttribute('data-theme')) return document.body.getAttribute('data-theme');
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [currentTheme, setCurrentTheme] = useState(getInitialTheme());
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'EN');

  const config = navigationConfig.navbar;

  const preferencesLinks = getMobileMenuSection('preferences');
  const resourcesLinks = getMobileMenuSection('resources');

 

  // Cerrar dropdowns al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Cerrar menú mobile al redimensionar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const getNavbarClasses = () => {
    const baseClasses = 'navbar navbar-expand-lg custom-navbar';
    const scrollClass = isScrolled ? 'navbar-scrolled' : '';
    const stickyClass = enableStickyBehavior ? 'fixed-top' : '';
    return `${baseClasses} ${scrollClass} ${stickyClass} ${className}`.trim();
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(prev => prev === id ? null : id);
  };

  // Manejo de acciones
  const handleSpecialAction = (action) => {
    switch (action) {
      case 'toggleTheme': {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setCurrentTheme(newTheme);
        break;
      }
      case 'toggleLanguage': {
        const newLang = currentLanguage === 'EN' ? 'ES' : 'EN';
        setCurrentLanguage(newLang);
        localStorage.setItem('language', newLang);
        break;
      }
      case 'downloadCV': {
        const fileName = currentLanguage === 'EN' ? 'CV-English.pdf' : 'CV-Español.pdf';
        const cvUrl = `/assets/files/${fileName}`;
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = fileName;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      }
      default:
        console.log('Unknown action:', action);
    }
  };

  const handleLinkClick = (link, e) => {
    if (e) e.preventDefault();
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    setOpenDropdown(null);

    if (!link) return;
    if (link.type === 'action') {
      handleSpecialAction(link.action, link);
      return;
    }
    handleNavigation(link);
    if (link.type === 'internal' || link.type === 'route') {
      setActiveLink(link);
    }
  };

  const isLinkActive = (link) => {
    if (!activeLink) return link.id === 'home';
    return activeLink.id === link.id;
  };

  const renderNavLink = (link) => {
    const isActive = isLinkActive(link);
    return (
      <li key={link.id} className="nav-item">
        <a
          className={`nav-link custom-btn-nav ${isActive ? 'active' : ''}`}
          href={link.href}
          onClick={(e) => handleLinkClick(link, e)}
          title={link.description}
          aria-label={link.description}
          aria-current={isActive ? 'page' : undefined}
        >
          {link.icon && <i className={`${link.icon} me-1`} aria-hidden="true"></i>}
          <span className="nav-link-text">{link.label}</span>
          {link.isNew && (
            <span className="badge bg-danger ms-1" style={{ fontSize: '8px' }}>
              {link.badge || 'NEW'}
            </span>
          )}
        </a>
      </li>
    );
  };

  const renderDropdown = (id, title, icon, links) => {
    const isOpen = openDropdown === id;
    return (
      <li className="nav-item dropdown">
        <button
          className={`nav-link dropdown-toggle btn btn-link custom-btn-nav ${isOpen ? 'show' : ''}`}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleDropdown(id);
          }}
          aria-expanded={isOpen}
        >
          <i className={`${icon} me-1`} aria-hidden="true"></i>
          {title}
        </button>

        <ul className={`dropdown-menu dropdown-menu-end ${isOpen ? 'show' : ''}`}>
          {links.map(link => (
            <li key={link.id}>
              {link.type === 'action' ? (
                <button
                  type="button"
                  className="custom-btn-nav dropdown-item d-flex align-items-center justify-content-between"
                  onClick={(e) => handleLinkClick(link, e)}
                >
                  <div>
                    {link.icon && <i className={`${link.icon} me-2`} aria-hidden="true"></i>}
                    {link.label}
                  </div>
                  {link.isToggle && link.action === 'toggleTheme' && (
                    <div className="form-check form-switch m-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={currentTheme === 'dark'}
                        readOnly
                      />
                    </div>
                  )}
                  {link.options && (
                    <span className="badge bg-secondary ms-2">{currentLanguage}</span>
                  )}
                  {link.isNew && (
                    <span className="badge bg-danger ms-2" style={{ fontSize: '8px' }}>
                      {link.badge || 'NEW'}
                    </span>
                  )}
                </button>
              ) : (
                <a
                  className="custom-btn-nav dropdown-item"
                  href={link.href || '#'}
                  onClick={(e) => handleLinkClick(link, e)}
                  target={link.type === 'external' ? '_blank' : undefined}
                  rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
                >
                  <i className={`${link.icon} me-2`} aria-hidden="true"></i>
                  {link.label}
                  {link.isNew && (
                    <span className="badge bg-danger ms-2" style={{ fontSize: '8px' }}>
                      {link.badge || 'NEW'}
                    </span>
                  )}
                </a>
              )}
            </li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <>
      <nav className={getNavbarClasses()} role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="navbar-brand">
            {config.showLogo && (
              <a
                className="navbar-brand-link d-flex align-items-center text-decoration-none"
                href="#home"
                onClick={(e) => handleLinkClick(
                  { id: 'home', href: '#/', type: 'route', label: 'Home' },
                  e
                )}
                aria-label="Go to homepage"
              >
                {config.logoIcon && (
                  <i className={`${config.logoIcon} me-2`} aria-hidden="true"></i>
                )}
                <PersonalIntro variant="navbar" showTitle={false} showTagline={false} animateText={false} />
              </a>
            )}
          </div>

          {showMobileMenu && (
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              aria-controls="mobile-navigation-menu"
            >
              <span>
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </span>
            </button>
          )}

          {/* Desktop Navigation */}
          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav ms-auto" role="menubar">
              

              {renderDropdown('preferences', 'Preferences', 'fas fa-cog', preferencesLinks)}
              {renderDropdown('resources', 'Resources', 'fas fa-download', resourcesLinks)}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          activeLink={activeLink}
          onNavigate={handleLinkClick}
          variant="dropdown"
        />
      )}
    </>
  );
}
