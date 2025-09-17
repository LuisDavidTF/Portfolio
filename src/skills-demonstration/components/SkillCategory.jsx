import React from 'react';
import SkillIcon from '../../shared/components/ui/SkillIcon';

/**
 * SkillCategory - Componente para cada categoría de skills
 * Reemplaza las 4 secciones hardcodeadas del Skills.jsx original
 */
export default function SkillCategory({ 
  categoryName,
  skills = [],
  variant = 'skill',
  size = 'medium',
  enableAnimations = true,
  animationDelay = 0
}) {
  
  if (!skills.length) return null;

  const categoryStyle = enableAnimations ? {
    animationDelay: `${animationDelay}s`
  } : {};

  return (
    <div className="col-6 col-md-3">
      <div 
        className={`tech-card title ${enableAnimations ? 'animate-fade-in' : ''}`}
        style={categoryStyle}
      >
        <h5>{categoryName}</h5>
        
        <div className="skills-icons">
          {skills.map((skill, index) => (
            <SkillIcon
              key={skill.id}
              icon={skill.icon}
              name={skill.name}
              variant={variant}
              size={size}
              title={skill.name}
              style={{
                backgroundColor: skill.color,
                color: skill.textColor,
                animationDelay: enableAnimations ? `${(index * 0.05)}s` : '0s'
              }}
              className={enableAnimations ? 'animate-scale-in' : ''}
              data-tech={skill.id}
              data-level={skill.level}
              data-experience={skill.experience}
              showLabel={true}
              onClick={() => {
                // Opcional: manejar clicks en skills individuales
               
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}