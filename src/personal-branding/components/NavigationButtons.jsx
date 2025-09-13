import { getHeroNavigation } from '../data/personal-info.js';

/**
 * NavigationButtons - Botones de navegación del hero
 * Reemplaza los hero-buttons del Hero.jsx original
 */
export default function NavigationButtons({ 
  variant = 'default', // 'default', 'pills', 'outline', 'minimal'
  layout = 'horizontal', // 'horizontal', 'vertical', 'grid'
  showIcons = true,
  showDescriptions = false,
  includeNewFeatures = true,
  enableAnimations = true,
  maxButtons = null, // Limitar número de botones
  className = ''
}) {
  const navigationItems = getHeroNavigation(includeNewFeatures);
  const displayItems = maxButtons ? navigationItems.slice(0, maxButtons) : navigationItems;

  const handleNavigation = (href, id) => {
    if (href.startsWith('#/')) {
      // Navegación externa o routing
      window.location.href = href;
    } else {// Navegación interna - scroll suave
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const getContainerClasses = () => {
    const baseClasses = `primary-color hero-buttons mt-4 ${className}`;
    const layoutClasses = {
      horizontal: 'buttons-horizontal',
      vertical: 'buttons-vertical d-flex flex-column align-items-center gap-2',
      grid: 'buttons-grid d-grid gap-2'
    };
    const animationClass = enableAnimations ? 'animate-fade-in-up' : '';
    
    return `${baseClasses} ${layoutClasses[layout]} ${animationClass}`.trim();
  };

  const getButtonClasses = (item, index) => {
    const baseClasses = 'btn';
    const variantClasses = {
      default: 'btn-hero',
      pills: 'btn btn-primary rounded-pill',
      outline: 'btn btn-outline-primary', 
      minimal: 'btn btn-link text-decoration-none'
    };
    
    const animationClass = enableAnimations ? 'animate-scale-in' : '';
    const animationDelay = enableAnimations ? { animationDelay: `${0.1 * index}s` } : {};
    
    return {
      className: `${baseClasses} ${variantClasses[variant]} ${animationClass}`.trim(),
      style: animationDelay
    };
  };

  const renderButton = (item, index) => {
    const { className: buttonClass, style } = getButtonClasses(item, index);
    
    return (
      <button
        key={item.id}
        type="button"
        className={buttonClass}
        style={style}
        onClick={() => handleNavigation(item.href, item.id)}
        title={item.description}
        data-section={item.id}
      >
        {/* Icono */}
        {showIcons && item.icon && (
          <i className={`${item.icon} me-2`}></i>
        )}
        
        {/* Label */}
        <span className="button-label">{item.label}</span>
        
        {/* Badge "New" */}
        {item.isNew && (
          <span className="badge bg-danger ms-2" style={{fontSize: '10px'}}>
            New
          </span>
        )}
        
        {/* Descripción (solo en variant minimal) */}
        {showDescriptions && item.description && variant === 'minimal' && (
          <small className="d-block text-secondary mt-1">{item.description}</small>
        )}
      </button>
    );
  };

  const renderButtonsWithDescriptions = () => {
    if (!showDescriptions || variant === 'minimal') {
      return displayItems.map(renderButton);
    }

    return (
      <div className="buttons-with-descriptions">
        {displayItems.map((item, index) => (
          <div key={item.id} className="button-with-description text-center">
            {renderButton(item, index)}
            {item.description && (
              <small className="d-block text-secondary mt-1">
                {item.description}
              </small>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Grid layout especial
  if (layout === 'grid') {
    return (
      <div className={getContainerClasses()} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))'}}>
        {displayItems.map(renderButton)}
      </div>
    );
  }

  // Layout horizontal o vertical
  return (
    <div className={getContainerClasses()}>
      {renderButtonsWithDescriptions()}
      
      {/* Información adicional opcional */}
      {displayItems.some(item => item.isNew) && (
        <div className="new-features-note mt-3">
          <small className="text-secondary">
            <i className="fas fa-sparkles me-1"></i>
            Check out the new features!
          </small>
        </div>
      )}
    </div>
  );
}