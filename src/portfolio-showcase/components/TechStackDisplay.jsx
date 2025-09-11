import SkillIcon from '../../shared/components/ui/SkillIcon.jsx';

/**
 * TechStackDisplay - Componente para mostrar tecnologías de un proyecto
 * Reemplaza las 8+ repeticiones de skill-items del Projects.jsx original
 * Reutiliza el SkillIcon component que ya tienes
 */
export default function TechStackDisplay({
  skills = [],
  variant = 'project', // 'project', 'compact', 'detailed'
  size = 'small', // 'small', 'medium', 'large'
  maxSkills = null,
  showLabels = true,
  enableHover = true,
  layout = 'inline', // 'inline', 'grid', 'vertical'
  groupByCategory = false,
  className = ''
}) {

  if (!skills.length) return null;

  // Limitar skills mostradas
  const skillsToShow = maxSkills ? skills.slice(0, maxSkills) : skills;
  const hasHiddenSkills = maxSkills && skills.length > maxSkills;

  // Agrupar por categoría si está habilitado
  const getGroupedSkills = () => {
    if (!groupByCategory) return { 'Technologies': skillsToShow };
    
    return skillsToShow.reduce((groups, skill) => {
      // Simplificada agrupación - podrías usar la categoría real del skill
      const category = skill.category || 'Other';
      if (!groups[category]) groups[category] = [];
      groups[category].push(skill);
      return groups;
    }, {});
  };

  const getContainerClasses = () => {
    const baseClasses = `tech-stack-display ${className}`;
    const variantClasses = {
      project: 'tech-stack-project',
      compact: 'tech-stack-compact',
      detailed: 'tech-stack-detailed'
    };
    const layoutClasses = {
      inline: 'tech-stack-inline',
      grid: 'tech-stack-grid d-flex flex-wrap gap-1',
      vertical: 'tech-stack-vertical d-flex flex-column gap-1'
    };
    
    return `${baseClasses} ${variantClasses[variant]} ${layoutClasses[layout]}`.trim();
  };

  const getSkillIconProps = (skill, index) => {
    return {
      key: skill.id,
      icon: skill.icon,
      name: skill.name,
      variant: variant,
      size: size,
      showLabel: showLabels,
      title: `${skill.name} - ${skill.level || 'Used in project'}`,
      style: {
        backgroundColor: skill.color,
        color: skill.textColor,
        animationDelay: `${index * 0.05}s`
      },
      className: `
        tech-stack-item 
        ${enableHover ? 'tech-hover-effect' : ''} 
        ${skill.featured ? 'tech-featured' : ''}
        animate-scale-in
      `.trim(),
      onClick: () => {
        // Opcional: mostrar detalles de la tecnología
        console.log(`Technology: ${skill.name}`, skill);
      }
    };
  };

  const renderSkillGroup = (categoryName, categorySkills) => {
    if (variant === 'compact' || !groupByCategory) {
      return categorySkills.map((skill, index) => (
        <SkillIcon {...getSkillIconProps(skill, index)} />
      ));
    }

    return (
      <div key={categoryName} className="skill-category-group mb-2">
        <small className="skill-category-label text-muted d-block mb-1">
          {categoryName}
        </small>
        <div className="skill-category-items d-flex flex-wrap gap-1">
          {categorySkills.map((skill, index) => (
            <SkillIcon {...getSkillIconProps(skill, index)} />
          ))}
        </div>
      </div>
    );
  };

  const renderMoreIndicator = () => {
    if (!hasHiddenSkills) return null;

    const hiddenCount = skills.length - maxSkills;
    
    return (
      <div className="more-technologies-indicator">
        <span className="badge bg-light text-dark">
          +{hiddenCount} more
        </span>
      </div>
    );
  };

  // Variant compacto - solo iconos en línea
  if (variant === 'compact') {
    return (
      <div className={getContainerClasses()}>
        <div className="skills-icons d-flex flex-wrap gap-1 align-items-center">
          {skillsToShow.map((skill, index) => (
            <SkillIcon 
              {...getSkillIconProps(skill, index)}
              showLabel={false}
              size="small"
            />
          ))}
          {renderMoreIndicator()}
        </div>
      </div>
    );
  }

  // Variant detallado - con categorías y etiquetas
  if (variant === 'detailed') {
    const groupedSkills = getGroupedSkills();
    
    return (
      <div className={getContainerClasses()}>
        <div className="tech-stack-header mb-2">
          <h6 className="tech-stack-title mb-1">
            <i className="fas fa-tools me-2"></i>
            Tech Stack
          </h6>
          <small className="text-muted">
            {skills.length} technolog{skills.length !== 1 ? 'ies' : 'y'} used
          </small>
        </div>
        
        <div className="tech-stack-content">
          {Object.entries(groupedSkills).map(([categoryName, categorySkills]) =>
            renderSkillGroup(categoryName, categorySkills)
          )}
          {renderMoreIndicator()}
        </div>
      </div>
    );
  }

  // Variant proyecto (default) - iconos con etiquetas
  return (
    <div className={getContainerClasses()}>
      <div className="velonia-skills"> {/* Mantiene compatibilidad con CSS existente */}
        {skillsToShow.map((skill, index) => (
          <SkillIcon {...getSkillIconProps(skill, index)} />
        ))}
        {renderMoreIndicator()}
      </div>
    </div>
  );
}