import { getTechStyle } from '../../utils/tech-colors.js';

/**
 * Componente reutilizable para mostrar iconos de tecnologías
 * @param {Object} props
 * @param {string} props.icon - Clase del icono (ej: "fab fa-js")
 * @param {string} props.name - Nombre de la tecnología
 * @param {string} props.variant - Variante del componente ("skill" | "project")
 * @param {string} props.size - Tamaño del componente ("small" | "medium" | "large")
 * @param {boolean} props.showLabel - Si mostrar o no el texto
 * @param {Function} props.onClick - Función de click opcional
 * @param {string} props.className - Clases CSS adicionales
 */
const SkillIcon = ({ 
  icon, 
  name, 
  variant = "skill", 
  size = "medium", 
  showLabel = true,
  onClick,
  className = "",
  ...props 
}) => {
  // Obtener estilos basados en el nombre de la tecnología
  const techStyle = getTechStyle(name);
  
  // Clases CSS basadas en variant y size
  const getVariantClass = () => {
    switch (variant) {
      case 'project':
        return 'project-skill';
      case 'skill':
      default:
        return 'skill-item';
    }
  };
  
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'skill-small';
      case 'large':
        return 'skill-large';
      case 'medium':
      default:
        return 'skill-medium';
    }
  };

  // Manejador de click
  const handleClick = () => {
    if (onClick) {
      onClick(name);
    }
  };

  // Estilos combinados
  const combinedStyle = {
    ...techStyle,
    ...props.style
  };

  return (
    <div 
      className={`${getVariantClass()} ${getSizeClass()} ${className}`.trim()}
      style={combinedStyle}
      title={name}
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      } : undefined}
      {...props}
    >
      {/* Icono */}
      <i className={icon} aria-hidden="true"></i>
      
      {/* Texto/Label */}
      {showLabel && (
        <span className="skill-label">{name}</span>
      )}
    </div>
  );
};

export default SkillIcon;