import { useSettings } from '../../shared/context/SettingsContext';

/**
 * PersonalIntro - Componente para mostrar nombre y título principal
 * Reemplaza la parte superior del Hero.jsx original
 */
export default function PersonalIntro({ 
  variant = 'navbar', // 'hero', 'navbar', 'compact'
  showTitle = true,
  showTagline = true,
  animateText = true,
  className = ''
}) {
  const { t } = useSettings();
  
  // Determinar qué mostrar según el variant
  const shouldShowFullName = variant === 'hero';
  const shouldShowTitle = showTitle;
  const shouldShowTagline = showTagline;
  
  const getNameDisplay = () => {
    switch (variant) {
      case 'navbar':
        return t.common.firstName;
      case 'compact':
        return t.common.firstName;
      case 'hero':
      default:
        return t.common.name;
    }
  };

  const getTitleDisplay = () => {
    return t.hero.title;
  };

  const getContainerClasses = () => {
    const baseClasses = `personal-intro ${className}`;
    const variantClasses = {
      hero: 'text-center hero-intro',
      navbar: ' text-center navbar-intro',
      compact: 'text-center compact-intro'
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
        <p className={`lead mb-3 text ${animateText ? 'animate-slide-up' : ''}`} 
           style={{animationDelay: animateText ? '0.2s' : '0'}}>
          {getTitleDisplay()}
        </p>
      )}
      
      {shouldShowTagline && t.hero.tagline && (
        <p className={`tagline text-secondary mb-4 ${animateText ? 'animate-fade-in' : ''}`}
           style={{animationDelay: animateText ? '0.2s' : '0'}}>
          {t.hero.tagline}
        </p>
      )}

      {/* Status de disponibilidad (opcional) */}
      {variant === 'hero' && (
        <div className={`availability-status ${animateText ? 'animate-fade-in' : ''}`}
             style={{animationDelay: animateText ? '0.4s' : '0'}}>
          <span className="badge bg-success">
            <i className="fas fa-circle me-1" style={{fontSize: '8px'}}></i>
            {t.common.available}
          </span>
        </div>
      )}
    </div>
  );
}