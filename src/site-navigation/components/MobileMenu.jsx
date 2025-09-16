import { useState, useEffect } from 'react';
import { 
  getAllMobileMenuSections,
  navigationConfig,
  handleNavigation 
} from '../data/navigation-links.js';
import { personalInfo } from '../../personal-branding/data/personal-info.js';

/**
 * MobileMenu - Menú hamburguesa completo
 */
export default function MobileMenu({
  isOpen,
  onClose,
  activeLink,
  onNavigate,
  variant = 'dropdown' // 'full-screen', 'sidebar', 'dropdown'
}) {
  const [currentTheme, setCurrentTheme] = useState(
    document.body.getAttribute('data-theme') || 'light'
  );
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  const config = navigationConfig.mobileMenu;
  const menuSections = getAllMobileMenuSections();

  // Obtener enlaces sociales de manera segura
  const getSocialLinks = () => {
    try {
      const social = personalInfo?.contact?.social || {};
      return {
        github: social.github || { url: '#', display: 'GitHub' },
        linkedin: social.linkedin || { url: '#', display: 'LinkedIn' },
        email: { 
          url: `mailto:${personalInfo?.contact?.email || 'contact@example.com'}`, 
          display: 'Email' 
        }
      };
    } catch (error) {
      console.warn('Error loading social links:', error);
      return {
        github: { url: '#', display: 'GitHub' },
        linkedin: { url: '#', display: 'LinkedIn' },
        email: { url: '#', display: 'Email' }
      };
    }
  };

  const socialLinks = getSocialLinks();

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar menú al presionar Escape
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose]);

  // Detectar cambios de tema
  useEffect(() => {
  // Detectar si el SO está en modo oscuro
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = prefersDark ? "dark" : "light";
 console.log(initialTheme);
  // Si body no tiene tema aún, asigna el del sistema
  if (!document.body.getAttribute("data-theme")) {
    document.body.setAttribute("data-theme", initialTheme);
  }

  // Asegúrate de que tu estado refleje el tema actual
  setCurrentTheme(document.body.getAttribute("data-theme"));

  // Observar cambios posteriores en data-theme
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "data-theme") {
        const newTheme =
          document.body.getAttribute("data-theme") || "light";
        setCurrentTheme(newTheme);
      }
    });
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  return () => observer.disconnect();
}, []);


  const handleItemClick = (item, e) => {
    if (e) e.preventDefault();

    // Manejar acciones especiales
    if (item.type === 'action') {
      handleSpecialAction(item.action, item);
      return;
    }

    // Navegación normal
    if (onNavigate) {
      onNavigate(item, e);
    } else {
      handleNavigation(item);
    }

    // Cerrar menú si está configurado
    if (config.closeOnItemClick && item.type !== 'action') {
      setTimeout(() => onClose(), 150); // Pequeño delay para mejor UX
    }
  };

  const handleSpecialAction = (action, item) => {
    switch (action) {
      case 'toggleTheme':
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setCurrentTheme(newTheme);
        console.log('Theme changed to:', newTheme);
        break;

      case 'toggleLanguage':
        const newLang = currentLanguage === 'EN' ? 'ES' : 'EN';
        setCurrentLanguage(newLang);
        localStorage.setItem('language', newLang);
        console.log('Language changed to:', newLang);
        // Aquí podrías disparar un evento o callback para cambio de idioma
        break;

      case 'downloadCV':
        try {
          // Construir URL del CV basado en el idioma
          const fileName = currentLanguage === 'EN' 
            ? 'CV-English.pdf' 
            : 'CV-Español.pdf';
          
          const cvUrl = `/assets/files/${fileName}`;
          
          // Crear elemento de descarga temporal
          const link = document.createElement('a');
          link.href = cvUrl;
          link.download = `${personalInfo?.firstName || 'CV'}_${personalInfo?.lastName || ''}_${currentLanguage}.pdf`;
          link.target = '_blank';
          
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          console.log('CV download initiated:', fileName);
        } catch (error) {
          console.error('Error downloading CV:', error);
          alert(`CV download is not available yet. File should be placed in: /assets/files/CV-${currentLanguage === 'EN' ? 'English' : 'Español'}.pdf`);
        }
        break;

      default:
        console.log('Unknown action:', action);
    }
  };

  const isItemActive = (item) => {
    if (!activeLink || !item) return false;
    return activeLink.id === item.id;
  };

  const getMenuClasses = () => {
    const baseClasses = 'mobile-menu';
    const variantClasses = {
      'full-screen': 'mobile-menu-fullscreen',
      'sidebar': 'mobile-menu-sidebar',
      'dropdown': 'mobile-menu-dropdown'
    };
    const openClass = isOpen ? 'mobile-menu-open' : 'mobile-menu-closed';
    const animationClass = config.enableAnimations ? 'mobile-menu-animated' : '';
    const blurClass = config.blurBackground ? 'mobile-menu-blur' : '';
    
    return `${baseClasses} ${variantClasses[variant]} ${openClass} ${animationClass} ${blurClass}`.trim();
  };

  const renderUserInfo = () => {
    if (!config.showUserInfo) return null;

    const fullName = personalInfo?.fullName || `${personalInfo?.firstName || 'John'} ${personalInfo?.lastName || 'Doe'}`;
    const currentTitle = personalInfo?.currentTitle || 'Developer';
    const location = personalInfo?.contact?.location?.display || 'Location';

    return (
      <div className="mobile-menu-user-info text-center mb-4">
        <div className="user-avatar mb-3">
          <div className="avatar-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto">
            <i className="fas fa-user fa-2x"></i>
          </div>
        </div>
        <h5 className="user-name mb-1">{fullName}</h5>
        <p className="user-title text-secondary mb-0">{currentTitle}</p>
        <small className="user-location text-secondary">
          <i className="fas fa-map-marker-alt me-1"></i>
          {location}
        </small>
      </div>
    );
  };

  const renderMenuItem = (item, index) => {
    if (!item) return null;
    
    const isActive = isItemActive(item);
    const animationDelay = config.enableAnimations ? { animationDelay: `${index * 0.1}s` } : {};
    
    return (
      <li 
        key={item.id} 
        className="mobile-menu-item"
        style={animationDelay}
      >
        <a
          href={item.href || '#'}
          className={`mobile-menu-link ${isActive ? 'active' : ''} ${item.type === 'action' ? 'action-item' : ''}`}
          onClick={(e) => handleItemClick(item, e)}
          aria-label={item.description || item.label}
          role={item.type === 'action' ? 'button' : 'menuitem'}
        >
          <div className="menu-item-content d-flex align-items-center">
            <div className="menu-item-icon">
              <i className={item.icon} aria-hidden="true"></i>
            </div>
            
            <div className="menu-item-text flex-grow-1">
              <span className="menu-item-label text-primary-css">{item.label}</span>
              {item.description && (
                <small className="menu-item-description d-block text-secondary">
                  {item.description}
                </small>
              )}
            </div>

            {/* Badges y indicadores */}
            <div className="menu-item-indicators">
              {item.isNew && (
                <span className="badge bg-danger me-2" style={{ fontSize: '9px' }}>
                  {item.badge || 'NEW'}
                </span>
              )}
              
              {item.isToggle && (
                <div className="form-check form-switch mb-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={item.action === 'toggleTheme' ? currentTheme === 'dark' : false}
                    onChange={() => {}} // Controlado por handleSpecialAction
                    aria-label={`Toggle ${item.label}`}
                  />
                </div>
              )}
              
              {item.options && (
                <span className="current-option badge bg-secondary">
                  {item.action === 'toggleLanguage' ? currentLanguage : item.options[0]}
                </span>
              )}
              
              {item.type === 'external' && (
                <i className="fas fa-external-link-alt text-secondary" style={{ fontSize: '0.8rem' }}></i>
              )}
            </div>
          </div>
        </a>
      </li>
    );
  };

  const renderMenuSection = (sectionKey, section) => {
    if (!section || !section.items) return null;

    if (!config.showSections) {
      // Mostrar todos los items sin secciones
      return section.items.map((item, index) => renderMenuItem(item, index));
    }

    return (
      <div key={sectionKey} className="mobile-menu-section mb-4">
        <div className="section-header mb-3">
          <h6 className="section-title d-flex align-items-center mb-0">
            <i className={`${section.icon} me-2`} aria-hidden="true"></i>
            {section.title}
          </h6>
        </div>
        
        <ul className="section-items list-unstyled mb-0">
          {section.items.map((item, index) => renderMenuItem(item, index))}
        </ul>
      </div>
    );
  };

  const renderFooterInfo = () => {
    if (!config.showFooterInfo) return null;

    return (
      <div className="mobile-menu-footer mt-auto pt-4">
        {/* Enlaces sociales */}
        <div className="footer-social text-center mb-3">
          <div className="social-links d-flex justify-content-center gap-3">
            <a
              href={socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={socialLinks.github.display}
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={socialLinks.linkedin.display}
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href={socialLinks.email.url}
              className="social-link"
              title={socialLinks.email.display}
              aria-label="Send Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Información adicional */}
        <div className="footer-info text-center">
          <small className="text-secondary d-block">
            © {new Date().getFullYear()} {personalInfo?.fullName || 'Portfolio'}
          </small>
        </div>
      </div>
    );
  };

  // No renderizar si no está abierto
  if (!isOpen) return null;

  return (
    <div className={getMenuClasses()} role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title">
      {/* Overlay para cerrar al hacer click */}
      <div 
        className="mobile-menu-overlay"
        onClick={onClose}
        aria-label="Close menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClose();
          }
        }}
      ></div>

      {/* Contenido del menú */}
      <div className="mobile-menu-content">
        {/* Header con botón cerrar */}
        <div className="mobile-menu-header d-flex justify-content-between align-items-center mb-4">
          <h5 id="mobile-menu-title" className="menu-title mb-0">Menu</h5>
          <button
            type="button"
            className="btn-close-mobile btn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Información del usuario */}
        {renderUserInfo()}

        {/* Secciones del menú */}
        <div className="mobile-menu-body">
          {Object.entries(menuSections).map(([sectionKey, section]) => 
            renderMenuSection(sectionKey, section)
          )}
        </div>

        {/* Footer del menú */}
        {renderFooterInfo()}
      </div>
    </div>
  );
}