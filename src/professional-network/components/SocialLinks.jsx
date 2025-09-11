import { useState } from 'react';
import { 
  getSocialLinksByContext, 
  socialDisplayConfig, 
  handleSocialClick,
  getSocialLinkStyles,
  getSocialLinkClasses 
} from '../data/social-links.js';
import { personalInfo } from '../../personal-branding/data/personal-info.js';

/**
 * SocialLinks - Componente de enlaces sociales
 * Reemplaza completamente el Footer.jsx original
 */
export default function SocialLinks({
  context = 'footer', // 'footer', 'contact', 'navbar'
  variant = 'default', // 'default', 'compact', 'detailed'
  showPersonalInfo = false,
  enableAnimations = true,
  className = ''
}) {
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const config = socialDisplayConfig[context];
  const socialLinks = getSocialLinksByContext(context);
  
  if (!socialLinks.length) return null;

  const getContainerClasses = () => {
    const baseClasses = `social-links social-links-${context}`;
    const variantClasses = {
      default: 'social-links-default',
      compact: 'social-links-compact',
      detailed: 'social-links-detailed'
    };
    const layoutClass = `social-links-${config.layout}`;
    const animationClass = enableAnimations ? 'social-links-animated' : '';
    
    return `${baseClasses} ${variantClasses[variant]} ${layoutClass} ${animationClass} ${className}`.trim();
  };

  const handleLinkClick = (link, e) => {
    // Prevenir comportamiento por defecto para email
    if (link.platform === 'email') {
      e.preventDefault();
      window.location.href = link.url;
    }
    
    // Tracking
    handleSocialClick(link.platform, context);
  };

  const handleMouseEnter = (linkPlatform) => {
    if (config.enableHoverEffects) {
      setHoveredLink(linkPlatform);
    }
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const renderSocialLink = (link, index) => {
    const isHovered = hoveredLink === link.platform;
    const linkStyles = getSocialLinkStyles(link, isHovered ? 'hover' : 'default');
    const linkClasses = getSocialLinkClasses(link, context);

    return (
      <a
        key={link.platform}
        href={link.url}
        target={link.platform === 'email' ? '_self' : '_blank'}
        rel={link.platform === 'email' ? '' : 'noopener noreferrer'}
        className={linkClasses}
        style={{
          ...linkStyles,
          animationDelay: enableAnimations ? `${index * 0.1}s` : '0s'
        }}
        title={config.showTooltips ? `${link.display} - ${link.username}` : ''}
        onClick={(e) => handleLinkClick(link, e)}
        onMouseEnter={() => handleMouseEnter(link.platform)}
        onMouseLeave={handleMouseLeave}
        aria-label={`${link.display} - ${link.username}`}
      >
        {/* Icono */}
        <i className={`${link.icon} social-icon`}></i>
        
        {/* Label (opcional) */}
        {config.showLabels && (
          <span className="social-label ms-2">{link.display}</span>
        )}
        
        {/* Username (para variant detailed) */}
        {variant === 'detailed' && (
          <span className="social-username text-theme-base ms-1">
            {link.username}
          </span>
        )}
      </a>
    );
  };

  // Variant compact - solo iconos en línea
  if (variant === 'compact') {
    return (
      <div className={getContainerClasses()}>
        <div className="social-links-list d-flex gap-3 justify-content-center">
          {socialLinks.map(renderSocialLink)}
        </div>
      </div>
    );
  }

  // Variant detailed - con información adicional
  if (variant === 'detailed') {
    return (
      <div className={getContainerClasses()}>
        {config.showTitle && (
          <h6 className="social-links-title  mb-3">
            <i className="fas fa-network-wired me-2"></i>
            {config.title || 'Connect with me'}
          </h6>
        )}
        
        <div className="social-links-list">
          {socialLinks.map((link, index) => (
            <div key={link.platform} className="social-link-item mb-2">
              {renderSocialLink(link, index)}
              <small className="social-link-description text-theme-base d-block ms-4">
                {link.platform === 'email' && 'Send me an email'}
                {link.platform === 'github' && 'Check out my repositories'}
                {link.platform === 'linkedin' && 'Connect professionally'}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Variant default - footer estándar
  return (
    <footer className={getContainerClasses()}>
      <div className="container">
        <div className="row justify-content-center align-items-center py-4">
          {/* Información personal (opcional) */}
          {showPersonalInfo && (
            <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
              <div className="footer-info">
                <h6 className="footer-name text-theme-base ms-1">{personalInfo.fullName}</h6>
                <small className="text-theme-base">{personalInfo.currentTitle}</small>
                <br />
                <small className="text-theme-base">
                  {personalInfo.contact.location.display}
                </small>
              </div>
            </div>
          )}

          {/* Enlaces sociales */}
          <div className={`col-12 ${showPersonalInfo ? 'col-md-6' : ''} text-center ${showPersonalInfo ? 'text-md-end' : ''}`}>
            <div className="footer-social">
              {config.showTitle && (
                <h6 className="social-title text-theme-strong mb-3">{config.title}</h6>
              )}
              
              <div className="social-links-list gap-3 ">
                {socialLinks.map(renderSocialLink)}
              </div>

              {/* Copyright info */}
              <small className="copyright text-theme-base mt-3 d-block">
                © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
