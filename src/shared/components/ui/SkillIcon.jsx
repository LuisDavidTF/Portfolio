import { getTechStyle } from '../../utils/tech-colors.js';
import { getAllSkillsFlat } from '@/skills-demonstration/data/skills-data.js';

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
  
  // Buscar el skill en la base de datos para obtener su URL de documentación
  const allSkills = getAllSkillsFlat();
  const skill = allSkills.find(
    s => s.name.toLowerCase() === name.toLowerCase() || s.id.toLowerCase() === name.toLowerCase()
  );

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
  const handleClick = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation(); // Evitar propagación a la tarjeta contenedora
    }
    
    if (skill && skill.docUrl) {
      window.open(skill.docUrl, '_blank', 'noopener,noreferrer');
    } else if (onClick) {
      onClick(name);
    }
  };

  // Estilos combinados
  const combinedStyle = {
    ...techStyle,
    ...props.style
  };

  const hasClickAction = onClick || (skill && skill.docUrl);

  return (
    <div 
      className={`${getVariantClass()} ${getSizeClass()} ${className}`.trim()}
      style={combinedStyle}
      title={skill ? `${skill.name} - ${skill.level || 'Used in project'} (Click to view docs)` : name}
      onClick={handleClick}
      role={hasClickAction ? "button" : undefined}
      tabIndex={hasClickAction ? 0 : undefined}
      onKeyDown={hasClickAction ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e);
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