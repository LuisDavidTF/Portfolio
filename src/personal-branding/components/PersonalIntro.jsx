import { personalInfo, getContextualTitle, displayConfig } from '../data/personal-info.js';

/**
 * PersonalIntro - Componente para mostrar nombre y título principal
 * Reemplaza la parte superior del Hero.jsx original
 */
export default function PersonalIntro({ 
  variant = 'hero', // 'hero', 'navbar', 'compact'
  showTitle = true,
  showTagline = true,
  animateText = true,
  className = ''
}) {
  const config = displayConfig.hero;
  
  // Determinar qué mostrar según el variant y config
  const shouldShowFullName = variant === 'hero' && config.showFullName;
  const shouldShowTitle = showTitle && config.showTitle;
  const shouldShowTagline = showTagline && config.showTagline;
  
  const getNameDisplay = () => {
    switch (variant) {
      case 'navbar':
        return displayConfig.navbar.useShortName ? personalInfo.firstName : personalInfo.fullName;
      case 'compact':
        return personalInfo.firstName;
      case 'hero':
      default:
        return personalInfo.fullName;
    }
  };

  const getTitleDisplay = () => {
    return getContextualTitle(variant);
  };

  const getContainerClasses = () => {
    const baseClasses = `personal-intro ${className}`;
    const variantClasses = {
      hero: 'text-center hero-intro',
      navbar: 'navbar-intro',
      compact: 'compact-intro'
    };
    const animationClass = animateText && variant === 'hero' ? 'animate-fade-in' : '';
    
    return `${baseClasses} ${variantClasses[variant] || ''} ${animationClass}`.trim();
  };

  if (variant === 'navbar') {
    return (
      <div className={getContainerClasses()}>
        <span className="navbar-brand-text fw-bold">
          {getNameDisplay()}
        </span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={getContainerClasses()}>
        <h6 className="mb-1">{getNameDisplay()}</h6>
        {shouldShowTitle && (
          <small className="text-secondary">{getTitleDisplay()}</small>
        )}
      </div>
    );
  }

  // Variant 'hero' (default)
  return (
    <div className={getContainerClasses()} id='home'>
      {shouldShowFullName && (
        <h1 className={`display-4 fw-bold mb-2 text ${animateText ? 'animate-slide-down' : ''}`}>
          {getNameDisplay()}
        </h1>
      )}
      
      {shouldShowTitle && (
        <p className={`lead mb-3 ${animateText ? 'animate-slide-up' : ''}`} 
           style={{animationDelay: animateText ? '0.2s' : '0'}}>
          {getTitleDisplay()}
        </p>
      )}
      
      {shouldShowTagline && personalInfo.tagline && (
        <p className={`tagline text-secondary mb-4 ${animateText ? 'animate-fade-in' : ''}`}
           style={{animationDelay: animateText ? '0.4s' : '0'}}>
          {personalInfo.tagline}
        </p>
      )}

      {/* Status de disponibilidad (opcional) */}
      {personalInfo.status.available && variant === 'hero' && (
        <div className={`availability-status ${animateText ? 'animate-fade-in' : ''}`}
             style={{animationDelay: animateText ? '0.6s' : '0'}}>
          <span className="badge bg-success">
            <i className="fas fa-circle me-1" style={{fontSize: '8px'}}></i>
            Available for opportunities
          </span>
        </div>
      )}
    </div>
  );
}