import { useSettings } from '../../shared/context/SettingsContext';
import SkillCategory from './SkillCategory';
import { getAllSkills, orderedCategories } from '../data/skills-data';
import React from 'react';

/**
 * SkillsContainer - Componente principal de la sección Skills
 * Reemplaza completamente el Skills.jsx original eliminando 28+ repeticiones
 */
export default function SkillsContainer({ 
  className = '',
  showTitle = true,
  maxSkillsPerCategory = null,
  variant = 'skill',
  size = 'medium',
  enableAnimations = true
}) {
  const { t } = useSettings();
  const skillsData = getAllSkills();

  return (
    <section className={`container my-5 ${className}`} id="skills">
      {showTitle && (
        <h2 className="text-center mb-4 section-title">
          {t.skills.title}
        </h2>
      )}
      
      <div className={`row g-4 justify-content-center ${enableAnimations ? 'animate-stagger' : ''}`}>
        {orderedCategories.map((categoryName, index) => {
          const categorySkills = skillsData[categoryName] || [];
          
          // Aplicar límite de skills si se especifica
          const displaySkills = maxSkillsPerCategory 
            ? categorySkills.slice(0, maxSkillsPerCategory)
            : categorySkills;

          return (
            <SkillCategory
              key={categoryName}
              categoryName={t.skills[categoryName.toLowerCase()] || categoryName}
              skills={displaySkills}
              variant={variant}
              size={size}
              enableAnimations={enableAnimations}
              animationDelay={enableAnimations ? index * 0.1 : 0}
            />
          );
        })}
      </div>
    </section>
  );
}